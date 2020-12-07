import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { useAuth} from '../contexts/AuthContext';

export default function Dashboard() {

    const [error, setError] = useState('');
    const { signout } = useAuth();
    
    const history = useHistory();

    async function handleLogOut(){
        try {
            setError('');
            await signout(); 
            history.push('/');
        } catch (e) {
            setError('Unable to logout!');
        }
    }

    return (
        <div>
            { error && <Alert variant = 'danger'> { error } </Alert> }
            <Button onClick = {handleLogOut} >Log Out</Button>
            Dashbord 
        </div>
    )
}

