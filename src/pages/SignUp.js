import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

export default function SignUp() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    
    const { signup } = useAuth();
    const [error , setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match');
        }

        try {
            setError('');
            await signup(emailRef.current.value, passwordRef.current.value);
            setLoading(true);
        } catch (error) {
            setError('Faild to create an account');
        }     
        setLoading(false);   
    }

    return (
        <>
            <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.09)' }}>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit= {handleSubmit}> 
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className='w-100' type='submit'>
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-4'>
                Already have an account? <Link to = '/login'>Log In</Link> 
            </div>  
        </>
    )
}
