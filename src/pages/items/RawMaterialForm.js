import {
  Container,
  makeStyles,
  FormControl,
  TextField,
  Grid,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  InputAdornment,
  Button,
  Typography,
} from "@material-ui/core";
import React, {useState}from "react";
import {useHistory} from 'react-router-dom';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { SaveOutlined } from "@material-ui/icons";

import * as MaterialService from '../../services/MaterialServices';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  h1: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // width: "25ch",
  },
  formControl: {
    display: "flex",
    margin: theme.spacing(1),
    // minWidth: 120,
  },
}));

export default function RawMaterialForm() {
  const classes = useStyles();
  const history = useHistory();
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [materialId, setMaterialId] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [category, setCategory] = useState('');
  const [unit, setUnit] = useState('kg');
  const [quantity, setQuantity] = useState(0); 
  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-08-18T21:11:54")
    );
  const [reorderPoint, setReorderPoint] = useState(0);

  const handleMaterialIdChange = (e) =>{
    setMaterialId(e.target.value);
  }

  const handleMaterialNameChange = (e) =>{
    setMaterialName(e.target.value);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleReorderPointChange = (e) => {
    setReorderPoint(e.target.value);
  }

  ///TODO: write a utility funtion that validates the inputs  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMaterial = {
      "materialId": materialId,
      "materialName": materialName,
      "category": category,
      "quantity": {
        'unit': unit,
        'value': Number(quantity) 
      },
      "expDate": selectedDate,  
      "reorderPoint": Number(reorderPoint),
    };

    try {
      await MaterialService.createNewRawMaterial(materialId,newMaterial);
      setSuccess('Saved to the Database');
      history.goBack();
    } catch (e) {
      setError(e);
    }
    
  }
  
  const handleCancel = (e) => {
    e.preventDefault();
    history.goBack();
    return ;
  }

  return (
    <Container component="main" maxWidth="md">
      <Paper  elevation={3} style={{padding: 50 , margin: 50}}>
        <h2
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          Add Raw Material
        </h2>
        {error &&   <Typography color='secondary'>{error.toString()}</Typography>}
        {success &&   <Typography color='primary'>{success.toString()}</Typography>}
        <form onSubmit={handleSubmit} className={classes.paper}>
          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignContent="center"
          >
            <Grid item xs={12}>
              <TextField
                value={materialId}
                onChange={handleMaterialIdChange}
                label="Material Id"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={materialName}
                onChange={handleMaterialNameChange}
                label="Material Name"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                variant="filled"
                fullWidth
                className={classes.formControl}
              >
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  variant="filled"
                  labelId="category-label"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="chemical">Chemical</MenuItem>
                  <MenuItem value="dye">Dye</MenuItem>
                  <MenuItem value="fragnance">Fragnance</MenuItem>
                  <MenuItem value="localRawMaterial">Local raw material</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}  sm={6}>
              <FormControl variant="filled" 
                  fullWidth className={classes.formControl}>
                <InputLabel id="unit-label">Unit</InputLabel>
                <Select
                  variant="filled"
                  labelId="unit-label"
                  defaultValue="kg"
                  value={unit}
                  onChange={handleUnitChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="kg">Killogram</MenuItem>
                  <MenuItem value="ml">Mililiter</MenuItem>
                  <MenuItem value="l">Liter</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}  sm={6}>
              <TextField
                type='number'
                fullWidth
                label="Quantity"
                value={quantity}
                onChange={handleQuantityChange}
                style={{ margin: 8 }}
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{unit}</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}  sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  fullWidth
                  variant="inline"
                  style={{ margin: 8 }}
                  format="MM/dd/yyyy"
                  margin="normal"
                  label="Exp. Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}  sm={6}>
              <TextField
                fullWidth
                type="number"
                value={reorderPoint}
                onChange={handleReorderPointChange}
                style={{ margin: 8 }}
                label="Reorder Point"
                margin="normal"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}  sm={6}>
              <Button onClick={handleCancel} variant="contained"  color="secondary">
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12}  sm={6}>
              <Button type='submit' startIcon={<SaveOutlined/>} variant="contained"  color="primary">
                Save 
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
