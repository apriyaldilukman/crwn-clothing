import SignUpForm from "../../components/SignUpForm/SignUpFormComponent";

import SignInForm from "../../components/SignInForm/SignInFormComponent";

import { AuthenticationContainer } from './AuthenticationStyles'

const Authentication = () => {
 return (
  <AuthenticationContainer>
    <SignInForm />
    <SignUpForm />
  </AuthenticationContainer>
 );
};

export default Authentication;