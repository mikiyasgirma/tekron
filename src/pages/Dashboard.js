import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import BodyWrapper from '../components/Navigator/BodyWrapper';
import Navigate from '../components/Navigator/Navigate';
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
        <>
        <Navigate title = {'Dashbord'} logout = {()=> handleLogOut()} /> 
        
            <BodyWrapper>
                <div>
                    {/* { error && <Alert variant = 'danger'> { error } </Alert> } */}
                    {/* <Button onClick = {handleLogOut} >Log Out</Button> */}
                    Dashbord 
                </div>
            </BodyWrapper>
        
    </>
    )
}

