import React from 'react';
import {ListItem, ListItemIcon,ListItemText,ListSubheader} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import SecurityIcon from '@material-ui/icons/Security';
import SettingsIcon from '@material-ui/icons/Settings';
import GavelIcon from '@material-ui/icons/Gavel';
import AssignmentIcon from '@material-ui/icons/Assignment';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

import {Link} from 'react-router-dom';

export const mainListItems = (
  <div> 
    <Link to= '/'>
      <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary="Sales" />
    </ListItem>
    <Link to="/items">
      <ListItem button>
          <ListItemIcon>
            <LocalActivityIcon />
          </ListItemIcon>
          <ListItemText primary="Items" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GavelIcon />
      </ListItemIcon>
      <ListItemText primary="Production" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Material Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RecentActorsIcon />
      </ListItemIcon>
      <ListItemText primary="Sales Force" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Manage | Configure</ListSubheader>
    <ListItem button >
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SecurityIcon />
      </ListItemIcon>
      <ListItemText primary="Access Control" />
    </ListItem>
  </div>
);