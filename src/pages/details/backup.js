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
    }
  }));
  

export default function RowMaterials(){
    const classes = useStyles();
    return (
        <div>
            <Grid >
                <Typography variant="h6" className={classes.title}>
                    Name
                </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowForwardIos />
                            </ListItemIcon>
                            <ListItemText primary="Potassium Hydroxide" />
                        </ListItem>
                    </List>
                <Typography variant="h6" className={classes.title}>
                    Id
                </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowForwardIos />
                            </ListItemIcon>
                            <ListItemText primary="HM - 2584" />
                        </ListItem>
                    </List>
                <Typography variant="h6" className={classes.title}>
                    Category 
                </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowForwardIos />
                            </ListItemIcon>
                            <ListItemText primary="Body Treatment" />
                        </ListItem>
                    </List>
                <Grid 
                container
                direction = "row" >
                    <Grid>
                    <Typography variant="h6" className={classes.title}>
                        Variant
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
                        Bottling Option
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