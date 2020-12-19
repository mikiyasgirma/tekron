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
  } from "@material-ui/core";
  import React from "react";
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(4),
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
      width: "25ch",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  
  export default function PackagingMaterialForm() {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');
  
    const handleChange = (event) => {
      setCategory(event.target.value);
    };
  
    return (
      <Container component="main" maxWidth="md">
        <Paper elevation={3} style={{ padding: 50, margin: 50 }}>
          <h1
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
          Packaging Material Form
          </h1>
          <form className={classes.paper}>
            <Grid
              container
              direction="row"
              justify="center"
              alignContent="center"
            >
              <TextField
                id="material-id"
                label="Material Id"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                variant="filled"
              />
              <TextField
                id="material-name"
                label="Material Name"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                variant="filled"
              />
              <FormControl variant= "filled" fullWidth className={classes.formControl}>
                <InputLabel id="category-label">category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  value={category}
                  onChange={handleChange}
                >
                   <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='bottle'>Bottle</MenuItem>
                  <MenuItem value='lable'>Lable</MenuItem>
                  <MenuItem value='cap'>Cap</MenuItem>
                  <MenuItem value='jerrycan'>Jerrycan</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </form>
        </Paper>
      </Container>
    );
  }
  