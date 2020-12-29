import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

import Typography from "@material-ui/core/Typography";
import { ArrowForwardIos } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    shifright:{
        marginLeft: "30%"
    },
    rowed:{
        alignContent: "row",
        marginLeft: "10%"
    },
    forGrid:{
        margin: 20
    }
  }));
  

export default function ItemDesc(){
    const classes = useStyles();
    return (
        <div>
            <Grid >
                <Grid container direction = "row" className = {classes.forGrid}>
                    <Typography variant="h6" >
                        Name:
                    </Typography>
                    <Typography variant = "h6" className = {classes.rowed}>
                         Potassium
                    </Typography>
                </Grid>
                <Grid container direction = "row" className = {classes.forGrid}>
                    <Typography variant="h6" >
                        ID:
                    </Typography>
                    <Typography variant = "h6" className = {classes.rowed}>
                         HM-1431
                    </Typography>
                </Grid>
                <Grid container direction = "row" className = {classes.forGrid}>
                    <Typography variant="h6" >
                        Category:
                    </Typography>
                    <Typography variant = "h6" className = {classes.rowed}>
                         Cleaning
                    </Typography>
                </Grid>
                <Grid className = {classes.forGrid}
                container
                direction = "row" >
                    <Grid>
                    <Typography variant="h6" className={classes.title}>
                        Variant:
                    </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIos />
                                </ListItemIcon>
                                <ListItemText primary="Yellow" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIos />
                                </ListItemIcon>
                                <ListItemText primary="Green" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIos />
                                </ListItemIcon>
                                <ListItemText primary="Black" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid className = {classes.shifright}>
                    <Typography variant="h6" className={classes.title}>
                        Bottling Option:
                    </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIos />
                                </ListItemIcon>
                                <ListItemText primary="700" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIos />
                                </ListItemIcon>
                                <ListItemText primary="500" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowForwardIos />
                                </ListItemIcon>
                                <ListItemText primary="250" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Grid> 
        </div>
    )
}