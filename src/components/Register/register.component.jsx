import React from 'react';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import './register.styles.scss'

const Register = () => (
    <div className='register'>
        <SignIn />
        <SignUp />
    
    </div>
)

export default Register;