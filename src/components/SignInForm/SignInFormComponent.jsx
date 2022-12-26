import { useState, useContext } from "react";

import FormInput from "../FormInput/FormInputComponent";
import Button, { BUTTON_TYPE_CLASSES } from "../Buttons/ButtonComponent";

import { UserContext } from "../../contexts/UserContext"; 

import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../Utils/firebase/FirebaseUtils";

import { SignInContainer, ButtonsContainer } from './SignInFormStyles'


const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password,  } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
     setCurrentUser(user);
     createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword (
        email, 
        password
      );
      resetFormFields();
      setCurrentUser(user);
    } catch(error) {
      switch(error.code){
        case 'auth/wrong-password' : alert('incorrect password for email');
        break
        case 'auth/user-not-found' : 
        alert('no user associated with this email');
        break;
        default:
          console.log(error)
      }
    }
  };

  const handleChange = (event) => {
    const {name, value } = event.target;

    setFormFields({...formFields, [name]: value });
  };

  return (
    <SignInContainer>
    <h2>Already have an account?</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
      <FormInput
        label='Email'
        type='email'
        required
        onChange={handleChange}
        name='email'
        value={email}
      />

      <FormInput
        label='Password'
        type='password'
        required
        onChange={handleChange}
        name='password'
        value={password}
      />
      <ButtonsContainer>
      <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
      </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;