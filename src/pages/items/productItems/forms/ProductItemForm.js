import { makeStyles,Checkbox,Input,ListItemText, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ChipsArray from './ChipsArray';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    //   maxWidth: 500,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const bottles = [
  '700 ml',
  '500 ml',
  '5 kg',
  '750 ml',
];

export default function ProductItemForm() {
    const classes = useStyles()

    const [category, setCategory] = useState('');
    const [bottlesOption, setBottleOptions] = useState([]);

    const handleOptionChange = (event) => {
        setBottleOptions(event.target.value);
    };

    const handleCategoryChange = (e) =>{
        setCategory(e.target.value);
    }

    return (
        <div className={classes.root}>
            <Grid 
                container 
                spacing={3} 
                direction="row"
                justify="center"
                alignContent="center" 
            >
                    <Grid item xs={12} sm={6}>
                        <form>
                        
                            <Typography>Item Detail</Typography>  
                            <TextField 
                                style={{ margin: 8 }}
                                fullWidth
                                margin="normal"
                                label="Item Id" 
                                required  
                                variant="filled"
                            />
                            <TextField 
                                label="Item Name" 
                                variant="filled"
                                style={{ margin: 8 }}
                                fullWidth
                                margin="normal"
                            />
                            <FormControl fullWidth className={classes.formControl} variant="filled" >
                                <InputLabel id="category-label">Category</InputLabel>
                                <Select  labelId="category-label" value={category} onChange={handleCategoryChange}>
                                    <MenuItem value=''><em>None</em></MenuItem>
                                    <MenuItem value='cleaning'>Cleaning</MenuItem>
                                    <MenuItem value='beauty'>Beauty</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField 
                                label="Variant Type" 
                                variant="filled"
                                style={{ margin: 8 }}
                                fullWidth
                                margin="normal"
                            />
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-checkbox-label">Select Bottling Options</InputLabel>
                                <Select
                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                multiple
                                value={bottlesOption}
                                onChange={handleOptionChange}
                                input={<Input />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                                >
                                {bottles.map((bottle) => (
                                    <MenuItem key={bottle} value={bottle}>
                                    <Checkbox checked={bottlesOption.indexOf(bottle) > -1} />
                                    <ListItemText primary={bottle} />
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </form>
                    </Grid>
                
                    <Grid item xs={12} sm={6}>    
                        <Typography>Variants</Typography>
                        <ChipsArray/>
                        
                    </Grid>
                
            </Grid>
        </div>
    )
}
