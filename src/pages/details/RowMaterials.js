import MaterialTable from 'material-table';

export default function RowMaterials() {
    
    const data = [
        {recipeId: 'DW-10025', recipeName: 'Water', formulaQnt: '256', variant:'black'},
    ];

    //const [data, setData] = useState();
   
    const columns = [
        {title: 'Recipe Id', field: 'recipeId'},
        {title: 'Recipe Name', field: 'recipeName'},
        {title: 'formula Quantity', field: 'formulaQnt'},
        {title: 'Variant', field: 'variant'}
    ]

//setData(initialData);
    return (
      <MaterialTable
        title="Recipes"
        columns={columns}
        data={data}        
        options={{
          search: true
        }}
      />
    )
  }
  