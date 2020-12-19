import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import { useHistory, useRouteMatch } from 'react-router-dom';


const actions = ['New Item', 'New Raw Material', 'New Packagining Material'];

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const handleListItemClick = (value) => {
    /// TODO: navigate to ItemsForm page or MaterialsForm Page depending on the value passed.
    if(value === actions[0]){
      console.log(url)
      history.push(`${url}/additem`);
    } 
    if(value === actions[1]) {
       console.log(url)
       history.push(`${url}/addrawmaterial`);
    }
    if(value === actions[2]) {
       console.log(url)
       history.push(`${url}/addpackagingmaterial`);
    }
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Add Items/Materials</DialogTitle>
      <List>
        {actions.map((action) => (
          <ListItem button onClick={() => handleListItemClick(action)} key={action}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
              <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={action}/>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ItemsFab() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(actions[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Fab variant="round" color="primary" onClick={handleClickOpen}>
        <AddIcon/>
      </Fab>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
