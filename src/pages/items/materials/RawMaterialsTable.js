import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import * as MaterialService from '../../../services/MaterialServices';

export default function RawMaterialsTable() {
    
  const [data, setData] = useState([]);
  
  const [columns, setColumns] = useState([
    {title: 'Material Id', field: 'materialId'},
    {title: 'Material Name', field: 'materialName'},
    {title: 'Category', field: 'category', lookup: {
      'chemical' : 'Chemical',
      'dye': 'Dye',
      'fragnance': 'Fragnance',
      'localRawMaterial': 'Local RM'
    }},
    {title: 'Unit', field: 'unit', lookup:{
      'kg': 'Killogram', 
      'ml': 'Milliliter', 
      'l': 'Liter'}},
    {title: 'Quantity', field: 'quantity', type: 'numeric'},
    {title: 'Reorder Point', field: 'reorderPoint', type:'numeric'},
    {title: 'Exp. Date', field: 'expDate', type: 'datetime'}
  ]);

  useEffect(() => {
    async function fetchData(){
      const querySnapshot = await MaterialService.getRawMaterials();
      let tempData = [];
      querySnapshot.forEach(doc=>{
        tempData.push({
          materialId: doc.data().materialId, 
          materialName: doc.data().materialName, 
          category: doc.data().category,
          unit: doc.data().quantity.unit, 
          quantity: doc.data().quantity.value, 
          reorderPoint: doc.data().reorderPoint,
          expDate: new Date(doc.data().expDate.toDate()),
          });
      })
      setData(tempData);
    }
    fetchData();
    return () => {
     // cleanup
    }
  }, [/*initialData*/])

    async function onRowUpdate(newData, oldData){
      console.log('New Data: ',newData);

      const dataUpdate = [...data];
      const index = oldData.tableData.id;
    
      try {
        const modifiedData = {...newData, quantity: {unit: newData.unit, value:Number(newData.quantity)} } 
       
        const {materialId, materialName, category, quantity, expDate, reorderPoint } = modifiedData;
        
        await MaterialService.updateRawMaterial(oldData.materialId,  {materialId, materialName, category, quantity, expDate, reorderPoint });
       
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
        
        await MaterialService.deleteRawMaterial(oldData.materialId);
        ///TODO: display some succuss message in sanck bar or smth    
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
      } catch (e) {
        console.log(e);
      }
    }

    return (
      <MaterialTable
        title="Raw Materials"
        columns={columns}
        data={data}
        editable={{
          onRowUpdate: onRowUpdate, 
          onRowDelete: onRowDelete,
        }}        
        options={{
          search: true
        }}
      />
    )
  }
  