import React from 'react'
import AppInput from '../AppInput'
import FormContainer from '../FormContainer'
import FormNavigator from '../FormNavigator';
import SubmitButton from '../SubmitButton';

function Login() {
  return (
    <FormContainer>
      <AppInput placeholder="email@example.com" />
      <AppInput placeholder="*********" />
      <SubmitButton title="login"/>
      <FormNavigator leftLinkText="Sign up" rightLinkText="Forgot Password"/>
    </FormContainer>
  );
}

export default Login