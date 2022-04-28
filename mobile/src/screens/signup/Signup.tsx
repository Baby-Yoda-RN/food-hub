import React, {FC} from 'react';
import { TSignupProps } from "./Signup.type";
import { SignupView } from './Signup.view';

export const Signup: FC<TSignupProps> = ({
  Text = 'Go To Login!',
}) =>{
  return (
    <SignupView
      Text={Text}
    />
  )
}