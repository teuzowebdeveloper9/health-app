import {View,Text, TextInput, Pressable} from 'react-native'
import {LoginFormProps} from '../../types/LoginFormProps'
import { LoginFormStylesheets } from './LoginFormStylesheet'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import { Button } from '../Button/Button';


export default function LoginFormComponent({onPress,isLogin} : LoginFormProps){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const Polarity = () => {
      setIsPasswordVisible((prev) => !prev )
    }

  return(
    <View style={LoginFormStylesheets.container}>
      {!isLogin && <TextInput
         placeholder='name' 
         maxLength={65}
         style={LoginFormStylesheets.input}
          />}
        <TextInput
         placeholder='email' 
         maxLength={65}
         style={LoginFormStylesheets.input}
          />
          {isPasswordVisible ? <Pressable onPress={Polarity}> <FaEyeSlash  style={LoginFormStylesheets.eyeIcons} /> </Pressable>  : <Pressable onPress={Polarity}> <FaEye style={LoginFormStylesheets.eyeIcons} /> </Pressable>}
          <TextInput
         placeholder='password' 
         maxLength={65}
         style={LoginFormStylesheets.input}
         secureTextEntry={isPasswordVisible}
           />
           {isLogin ? <Text style={LoginFormStylesheets.PolarityText} onPress={onPress}>sign in ?</Text> : <Text style={LoginFormStylesheets.PolarityText} onPress={onPress}>login ?</Text> }

          <Button  label={isLogin ? 'login' : 'sign in'} />
         
    </View>
  )
}