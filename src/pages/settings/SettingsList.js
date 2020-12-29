import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Units from './Units'
import Bottling from './Bottling'
import Commission from './Commission'
import BankAccount from './BankAccount'
import VatRate from './vatRate'
import SalesZone from './SalesZone'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    margin: '20px'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabPanel: {
    marginLeft: '10%',
    width: '70%'
  },
}));

export default function SettingList() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const initialItemsData = [
    {number: '1', unitName: 'Kilogram'},
    {number: '2', unitName: 'Litter'},
    {number: '3', unitName: 'Millitter'},
    {number: '4', unitName: 'Spoon'},
    {number: '5', unitName: 'Barrel'},
  ];

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        //variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Units" {...a11yProps(0)} />
        <Tab label="Bottling" {...a11yProps(1)} />
        <Tab label="Commission" {...a11yProps(2)} />
        <Tab label="Bank Account" {...a11yProps(3)} />
        <Tab label="Vat Rates" {...a11yProps(4)} />
        <Tab label="Sales Zone" {...a11yProps(5)} />
      </Tabs>
      <TabPanel 
      value={value} index={0}
      className = {classes.tabPanel}
      >
        <Units/>
      </TabPanel>
      <TabPanel value={value} index={1} className = {classes.tabPanel} >
        <Bottling />
      </TabPanel>
      <TabPanel value={value} index={2} className = {classes.tabPanel}>
        <Commission />
      </TabPanel>
      <TabPanel value={value} index={3} className = {classes.tabPanel}>
        <BankAccount />
      </TabPanel>
      <TabPanel value={value} index={4} className = {classes.tabPanel}>
        <VatRate />
      </TabPanel>
      <TabPanel value={value} index={5} className = {classes.tabPanel}>
        <SalesZone />
      </TabPanel>
    </div>
  );
}
