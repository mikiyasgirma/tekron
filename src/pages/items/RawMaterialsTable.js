import React, {useState} from 'react';
import MaterialTable from 'material-table';

export default function RawMaterialsTable({initialData}) {
    
    // const initialData = [
    //     {materialId: 'HM-10025', materialName: 'Dish Washer', category: 'Chemical', quantity: 100, capacity: 10, expDate: Date.now()},
    //     {materialId: 'HM-10013', materialName: 'Shampoo', category: 'Bottling', quantity: 200, capacity: 10, expDate: Date.now()},
    //     {materialId: 'BO-10025', materialName: 'Liquid Hand Soap', category: 'Label', quantity: 300, capacity: 10, expDate: Date.now()},
    //     {materialId: 'BO-10025', materialName: 'Windo Cleaner', category: 'Chemical', quantity: 400, capacity: 10, expDate: Date.now()},
    //     {materialId: 'HM-10025', materialName: 'Hand soap', category: 'Cap', quantity: 500, capacity: 10, expDate: Date.now()},
    // ];

    const [data, setData] = useState(initialData);
   
    const columns = [
        {title: 'Material Id', field: 'materialId'},
        {title: 'Material Name', field: 'materialName'},
        {title: 'Category', field: 'category'},
        {title: 'Quantity', field: 'quantity'},
        {title: 'Reorder Point', field: 'reorderPoint'},
        {title: 'Exp. Date fie()ld:', field: 'expDate' }
    ]


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
  