import {View,Text, TextInput, Pressable} from 'react-native'
import {LoginFormProps} from '../../types/LoginFormProps'
import { LoginFormStylesheets } from './LoginFormStylesheet'
import { useState } from 'react';
import { Button } from '../Button/Button';
import { handleLogin } from '@/utils/handleLogin';
import { handleSignin } from '@/utils/handleSignin';
import {  useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';


export default function LoginFormComponent({onPress,isLogin} : LoginFormProps){

      const Router = useRouter()

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [form,setForm] = useState({
      name : '',
      email : '',
      password : ''
    })

    const handleChange = (name : string, value : string) => {
      setForm({
        ...form,
        [name] : value
      })
    }

    const Polarity = () => {
      setIsPasswordVisible((prev) => !prev )
    }

  return(
    <View style={LoginFormStylesheets.container}>
      {!isLogin && <TextInput
         placeholder='name'
         value={form.name}
         onChangeText={(text) => handleChange('name',text)}
         maxLength={65}
         style={LoginFormStylesheets.input}
          />}
        <TextInput
         placeholder='email'
         value={form.email}
         onChangeText={(text) => handleChange('email',text)}
         maxLength={65}
         style={LoginFormStylesheets.input}
          />
           {isPasswordVisible 
  ? (
    <Pressable onPress={Polarity}>
      <FontAwesome name="eye-slash" size={24} style={LoginFormStylesheets.eyeIcons} />
    </Pressable>
  )
  : (
    <Pressable onPress={Polarity}>
      <FontAwesome name="eye" size={24} style={LoginFormStylesheets.eyeIcons} />
    </Pressable>
  )
}
          <TextInput
         placeholder='password'
         value={form.password}
         onChangeText={(text) => handleChange('password', text)} 
         maxLength={65}
         style={LoginFormStylesheets.input}
         secureTextEntry={isPasswordVisible}
           />
           {isLogin ? <Text style={LoginFormStylesheets.PolarityText} onPress={onPress}>sign in ?</Text> : <Text style={LoginFormStylesheets.PolarityText} onPress={onPress}>login ?</Text> }

          <Pressable  onPress={async () => {
    if (isLogin) {
     const response = await handleLogin(form.email, form.password);

     if(response.status == 200){
        Router.push('/two')
     }
    } else {
      const response = await handleSignin(form.name, form.email, form.password);

      if(response.status == 201){
        Router.push('/two')
      }
    }
  }}>
           <Button label={isLogin ? 'login' : 'sign in'} />
          </Pressable>
        

    </View>
  )
}