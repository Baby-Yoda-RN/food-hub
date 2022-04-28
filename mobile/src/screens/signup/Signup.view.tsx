import React, {FC} from 'react';
import {View, Button} from 'react-native';
import { TSignupView } from './Signup.type';

export const SignupView: FC<TSignupView> = ({press}) => {
   
    return (
    <View>
        <Button 
            title="Go To Login!"
            onPress={press}
        />
    </View>
    

    );
  };