import React from 'react';
import { makeStyles} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../components/TabPanel';
import ItemsTabel from './ItemsTable';
import MaterialsTable from './MaterialsTable';

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

export default function ItemsTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Tabs value={value} onChange={handleChange} aria-label="items tabs">
          <Tab label="Product Items" {...a11yProps(0)} />
          <Tab label="Materials" {...a11yProps(1)} />
        </Tabs>
  
      <TabPanel value={value} index={0}>
        <ItemsTabel/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MaterialsTable/>
      </TabPanel>
    </div>
  );
}
