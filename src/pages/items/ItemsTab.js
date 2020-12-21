import React,{ useState, useEffect} from 'react';
import { Grid, makeStyles} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../components/TabPanel';
import ItemsTable from './ItemsTable';
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
    setValue(newValue);
  };

  const initialItemsData = [
    {itemId: 'DW-10025', itemName: 'Dish Washer', category: 'Cleaning', variantType:'Color'},
    {itemId: 'SM-10013', itemName: 'Shampoo', category: 'Cosmetics', variantType:'Flavour'},
    {itemId: 'LHW-10025', itemName: 'Liquid Hand Soap', category: 'Cleaning', variantType:'Flavour'},
    {itemId: 'WC-10025', itemName: 'Windo Cleaner', category: 'Cleaning', variantType:'None'},
    {itemId: 'HS-10025', itemName: 'Hand soap', category: 'Cleaning', variantType:'Flavour'},
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
        <ItemsTable initialData= {initialItemsData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RawMaterialsTable/>
        {/* TODO: render PackagingMaterialsTable */}
      </TabPanel>
    </div>
  );
}
