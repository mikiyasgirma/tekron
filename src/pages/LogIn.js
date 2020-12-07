import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

export default function LogIn() {

    const emailRef = useRef();
    const passwordRef = useRef();
    
    const history = useHistory();
    const { signin } = useAuth();
    const [error , setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        
        try {
            setError('');
            await signin(emailRef.current.value, passwordRef.current.value);
            setLoading(true);
            history.push('/');
        } catch (error) {
            setError('Faild to Login');
        }     
        setLoading(false);   
    }

    return (
        <>
            <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.09)' }}>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log In</h2>
                    {error && <Alert variant='danger'> { error }</Alert>}
                    <Form onSubmit = { handleSubmit }> 
                        <Form.Group id = 'email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type = 'email' ref = { emailRef } required/>
                        </Form.Group>
                        <Form.Group id = 'password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type = 'password' ref = { passwordRef } required/>
                        </Form.Group>
                        <Button disabled= { loading } className='w-100' type='submit'>
                            Log In 
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-4'>
                Need an account? <Link to = '/signup'>Sign Up</Link>  
            </div>  
        </>
    )
}
