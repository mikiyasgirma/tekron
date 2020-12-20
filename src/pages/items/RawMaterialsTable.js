import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import * as MaterialService from '../../services/MaterialServices';

export default function RawMaterialsTable() {
    
  // const initialData = [
  //   {materialId: 'HM-10025', materialName: 'Dish Washer', category: 'Chemical', quantity: 100, reorderPoint: 10, expDate: Date.now()},
  //   {materialId: 'HM-10013', materialName: 'Shampoo', category: 'Bottling', quantity: 200, reorderPoint: 10, expDate: Date.now()},
  //   {materialId: 'BO-10025', materialName: 'Liquid Hand Soap', category: 'Label', quantity: 300, reorderPoint: 10, expDate: Date.now()},
  //   {materialId: 'BO-10025', materialName: 'Windo Cleaner', category: 'Chemical', quantity: 400, reorderPoint: 10, expDate: Date.now()},
  //   {materialId: 'HM-10025', materialName: 'Hand soap', category: 'Cap', quantity: 500, reorderPoint: 10, expDate: Date.now()},
  // ];
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([
    {title: 'Material Id', field: 'materialId'},
    {title: 'Material Name', field: 'materialName'},
    {title: 'Category', field: 'category'},
    {title: 'Quantity', field: 'quantity'},
    {title: 'Reorder Point', field: 'reorderPoint', type:'numeric'},
    {title: 'Exp. Date', field: 'expDate'}
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
          quantity: `${doc.data().quantity.value} ${doc.data().quantity.unit}`, 
          reorderPoint: doc.data().reorderPoint,
          expDate: new Date(doc.data().expDate.toDate()).toDateString(),
          });
      })
      setData(tempData);
    }
    fetchData();
    return () => {
     // cleanup
    }
  }, [/*initialData*/])


    return (
      <MaterialTable
        title="Raw Materials"
        columns={columns}
        data={data}        
        options={{
          search: true
        }}
      />
    )
  }
  