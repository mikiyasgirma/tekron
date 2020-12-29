import MaterialTable from 'material-table';

export default function Tests() {
    
    const data = [
        {standard: 'color', type: 'orange'}
    ];

    //const [data, setData] = useState();
   
    const columns = [
        {title: 'Standard', field: 'standard'},
        {title: 'Type', field: 'type'}
    ]

//setData(initialData);
    return (
      <MaterialTable
        title="Tests"
        columns={columns}
        data={data}        
        options={{
          search: true
        }}
      />
    )
  }
  