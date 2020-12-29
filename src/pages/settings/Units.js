import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import * as UnitService from '../../services/unitServices';
import AddBox from '@material-ui/icons/AddBox';
import { forwardRef } from 'react';

const tableIcon = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />)
};

const useStyles = makeStyles({
    root: {
      width: 100
    },
  });

export default function UnitsTable() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const [columns, setColumns] = useState([
      {title: 'Si Unit', field: 'unitId'},
      {title: 'unit', field: 'unitName'}
    ]);

    useEffect(() =>{
      async function fetchData(){
        const querySnapshot = await UnitService.getUnits();
        let tempData = [];
        querySnapshot.forEach(doc =>{
          tempData.push({
            unitId : doc.data().unitId,
            unitName : doc.data().unitName,
          });
        });
        setData(tempData);
      }
      fetchData();
      return() =>{}
    })
  

  async function onRowUpdate(newData, oldData){

    const dataUpdate = [...data];
    const index = oldData.tableData.id;
  
    try {
      const modifiedData = {...newData } 
     
      const {unitId, unitName } = modifiedData;
      
      await UnitService.updateUnit(oldData.unitId,  {unitId, unitName});
     
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
      
      await UnitService.deleteUnit(oldData.unitId);
          
      dataDelete.splice(index, 1);
      setData([...dataDelete]);
    } catch (e) {
      console.log(e);
    }
  }

  async function onRowAdd(newData){
    try {
      console.log(newData);
      await UnitService.createNewUnit(newData.unitId,newData);
       } catch (e){
      console.log(e);
    }
  }

  return (
    <MaterialTable
      title="Units"
      columns={columns}
      data={data}
      icons={tableIcon}
      editable={{
        onRowAdd: onRowAdd,
        onRowUpdate: onRowUpdate, 
        onRowDelete: onRowDelete,
      }}        
      options={{
        search: true
      }}
    />
  )
}
  