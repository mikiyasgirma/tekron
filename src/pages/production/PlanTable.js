import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import * as PlanService from '../../services/PlanServices';

export default function PlanTable() {
    const [data, setData] = useState([]);
    
       
    const columns = [
        //{title: 'Date', field: 'planDate'},
        {title: 'Product Name/Variant', field: 'productName'},
        {title: 'Quantity', field: 'quantity'},
        {title: 'Status', field: 'status'},
        {title: 'Availablity', field: 'availability'}
    ];

    useEffect(() =>{
        async function fetchData(){
            const querySnapshot = await PlanService.getPlans();
            let tempData = [];
            querySnapshot.forEach(doc =>{
                tempData.push({
                   // planDate: doc.data().planDate.toString(),
                    productName : doc.data().productName,
                    quantity : doc.data().quantity,
                    status : doc.data().status,
                    availability : doc.data().availability, 
                });
            });
            
            setData(tempData);
            
            } fetchData();
            return () => {}
    }, [/* return */])

    async function onRowUpdate(newData, oldData){

        const dataUpdate = [...data];
        const index = oldData.tableData.id;
      
        try {
          const modifiedData = {...newData } 
         
          const {productName, quantity, status, availability } = modifiedData;
          
          await PlanService.updatePlan(oldData.planId,  {productName, quantity, status, availability});
         
          dataUpdate[index] = newData;
          setData([...dataUpdate]); 
    
        } catch (e) {
          console.log(e)
        }
      }

      async function onRowDelete(oldData){
        try {
          const dataDelete = [...data];
          const index = oldData.tableData.id;
          
          await PlanService.deletePlan(oldData.planId);
              
          dataDelete.splice(index, 1);
          setData([...dataDelete]);
        } catch (e) {
          console.log(e);
        }
      }

    return (
      <MaterialTable
        title="Production Scheduling  Table"
        columns={columns}
        data={data}
        editable={{
            //onRowAdd: onRowAdd,
            onRowUpdate: onRowUpdate, 
            onRowDelete: onRowDelete,
          }}         
        options={{
          search: true
        }}
      />
    )
  }
  