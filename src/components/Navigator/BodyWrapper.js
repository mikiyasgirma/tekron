import { Container, makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }));

export default function BodyWrapper(props) {
    const classes = useStyles();

    return (
        <main className = {classes.content}> 
            <div className ={classes.appBarSpacer} />
            <Container maxWidth='lg' className = {classes.container}>
                {props.children}
            </Container>
        </main>
    )
}
