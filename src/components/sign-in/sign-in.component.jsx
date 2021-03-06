import React from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';
import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";

class SignIn extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: ''
      };
    }
  
    handleSubmit = async event => {
      event.preventDefault();
  
      const { email, password } = this.state;
      const { emailSignInStart } = this.props;

      emailSignInStart(email, password);
    };

    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };
  
    render() {
      const { isGoogleSignInStart} = this.props;
      return (
        <SignInContainer>
          <SignInTitle>I already have an account</SignInTitle>
          <span>Sign in with your email and password</span>
  
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required
            />
            <ButtonsBarContainer>
              <CustomButton type='submit'> Sign in </CustomButton>
              <CustomButton type = 'button' onClick={isGoogleSignInStart} isGoogleSignIn>
                Sign in with Google
              </CustomButton>
            </ButtonsBarContainer>
          </form>
        </SignInContainer>
      );
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    onGoogleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
  })

  export default connect(null, mapDispatchToProps)(SignIn);