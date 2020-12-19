import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'
import Container from '@material-ui/core/Container';
import { Avatar, Button, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const { signup } = useAuth();
    const [error , setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        
        if(password !== passwordConfirm){
            return setError('Password do not match');
        }

        try {
            setError('');
            await signup(email, password);
            setLoading(true);
        } catch (error) {
            setError('Faild to create an account');
        }     
        setLoading(false);   
    }
    const classes = useStyles();
   
    return (
        <Container component= "main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                {error &&   <Typography color='secondary'>{error.toString()}</Typography>}
                <form className={classes.form} onSubmit = { handleSubmit }>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={password}
                        onChange={e => setPassword(e.target.value) }
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        
                        autoComplete="current-password"
                    />
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={passwordConfirm}
                        onChange={e => setPasswordConfirm(e.target.value) }
                        name="passwordConfirm"
                        label="Confirm password"
                        type="password"
                        id="passwordConfirm"
                    />
                    <Button 
                        disabled={loading}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        >Sign Up</Button>
                    <Grid container>
                        <Grid item >
                        <Link to='/signin' variant="body2">
                            {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            
        </Container>
    );
}
