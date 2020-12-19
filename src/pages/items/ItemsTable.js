import React, {useState} from 'react';
import MaterialTable from 'material-table';

export default function ItemsTabel({initialData}) {
    
    // const initialData = [
    //     {itemId: 'DW-10025', itemName: 'Dish Washer', category: 'Cleaning', variantType:'Color'},
    //     {itemId: 'SM-10013', itemName: 'Shampoo', category: 'Cosmetics', variantType:'Flavour'},
    //     {itemId: 'LHW-10025', itemName: 'Liquid Hand Soap', category: 'Cleaning', variantType:'Flavour'},
    //     {itemId: 'WC-10025', itemName: 'Windo Cleaner', category: 'Cleaning', variantType:'None'},
    //     {itemId: 'HS-10025', itemName: 'Hand soap', category: 'Cleaning', variantType:'Flavour'},
    // ];

    const [data, setData] = useState(initialData);
   
    const columns = [
        {title: 'Item Id', field: 'itemId'},
        {title: 'Item Name', field: 'itemName'},
        {title: 'Category', field: 'category'},
        {title: 'Variant Type', field: 'variantType'}
    ]


    return (
      <MaterialTable
        title="Items table"
        columns={columns}
        data={data}        
        options={{
          search: true
        }}
      />
    )
  }
  