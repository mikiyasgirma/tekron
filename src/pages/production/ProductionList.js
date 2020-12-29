import React,{ useState, useEffect} from 'react';
import { Grid, makeStyles} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../components/TabPanel';
import PlanTable from './PlanTable';
//import RawMaterialsTable from './materials/RawMaterialsTable';

function a11yProps(index) {
  return {
    id: `items-tab-${index}`,
    'aria-controls': `items-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ItemsTabs({children}) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  // const [itemsData, setItemsData] = useState();
  // const [materialsData, setMaterialsData] = useState();

  /// TODO: initially fetch all itemsData b/c that's what got rendered first and pass it to Tab 0 as a props 
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const initialItemsData = [
    {planDate: 'DW-10025', productName: 'Dish Washer', quantity: 'Cleaning', status:'Color', availability: 'not Available'},
    {planDate: 'SM-10013', productName: 'Shampoo', quantity: 'Cosmetics', status:'Flavour', availability: 'Available'},
    {planDate: 'LHW-10025', productName: 'Liquid Hand Soap', quantity: 'Cleaning', status:'Flavour', availability: 'not Available'},
    {planDate: 'WC-10025', productName: 'Windo Cleaner', quantity: 'Cleaning', status:'None', availability: 'not Available'},
    {planDate: 'HS-10025', productName: 'Hand soap', quantity: 'Cleaning', status:'Flavour', availability: 'available'},
  ];

  return (
    <div className={classes.root}>
        <Tabs value={value} onChange={handleChange} aria-label="items tabs">
          <Tab label="Production Schedule" {...a11yProps(0)}  />
          <Tab label="Production" {...a11yProps(1)} />
        </Tabs>
        <Grid 
          container
          direction='row'
          justify='center'
          alignContent='center' 
        >
          {children}
        </Grid>
        
      <TabPanel value={value} index={0}>
       {<PlanTable initialData= {initialItemsData} /> }
      </TabPanel>
      <TabPanel value={value} index={1}>
       {/* <RawMaterialsTable/> */}
        {/* TODO: render PackagingMaterialsTable */}
      </TabPanel>
    </div>
  );
}
