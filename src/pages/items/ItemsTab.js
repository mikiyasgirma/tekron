import React,{ useState, useEffect} from 'react';
import { Box, Container, Grid, makeStyles} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../components/TabPanel';
import ItemsTabel from './ItemsTable';
import RawMaterialsTable from './RawMaterialsTable';

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
    /// TODO: When this function got triggerd fetch all the materialsData that is going to be rendered and pass it to Tab 1 as props 
    setValue(newValue);
  };

  const initialItemsData = [
    {itemId: 'DW-10025', itemName: 'Dish Washer', category: 'Cleaning', variantType:'Color'},
    {itemId: 'SM-10013', itemName: 'Shampoo', category: 'Cosmetics', variantType:'Flavour'},
    {itemId: 'LHW-10025', itemName: 'Liquid Hand Soap', category: 'Cleaning', variantType:'Flavour'},
    {itemId: 'WC-10025', itemName: 'Windo Cleaner', category: 'Cleaning', variantType:'None'},
    {itemId: 'HS-10025', itemName: 'Hand soap', category: 'Cleaning', variantType:'Flavour'},
  ];

  const initialRawMaterialsData = [
    {materialId: 'HM-10025', materialName: 'Dish Washer', category: 'Chemical', quantity: 100, capacity: 10, expDate: Date.now()},
    {materialId: 'HM-10013', materialName: 'Shampoo', category: 'Bottling', quantity: 200, capacity: 10, expDate: Date.now()},
    {materialId: 'BO-10025', materialName: 'Liquid Hand Soap', category: 'Label', quantity: 300, capacity: 10, expDate: Date.now()},
    {materialId: 'BO-10025', materialName: 'Windo Cleaner', category: 'Chemical', quantity: 400, capacity: 10, expDate: Date.now()},
    {materialId: 'HM-10025', materialName: 'Hand soap', category: 'Cap', quantity: 500, capacity: 10, expDate: Date.now()},
];

  return (
    <div className={classes.root}>
        <Tabs value={value} onChange={handleChange} aria-label="items tabs">
          <Tab label="Product Items" {...a11yProps(0)}  />
          <Tab label="Materials" {...a11yProps(1)} />
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
        <ItemsTabel initialData= {initialItemsData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RawMaterialsTable initialData={initialRawMaterialsData}/>
        ///TODO: render PackagingMaterialsTable
      </TabPanel>
    </div>
  );
}
