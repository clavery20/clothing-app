import React from 'react';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './register.styles.jsx'

const Register = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
  </SignInAndSignUpContainer>
);
export default Register;