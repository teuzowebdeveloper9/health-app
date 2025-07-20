import { StyleSheet } from "react-native";

export const LoginFormStylesheets = StyleSheet.create({
  container : {
    marginLeft : 5,
    height : 300,
    width : 400,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
  },
  input : {
    margin : 10,
    padding : 5,
    fontSize : 18,
    fontWeight : 'black',
    color : 'black',
    borderWidth : 2,
    borderColor : '#4FC3F7'
  },
  eyeIcons : {
    position : 'relative',
    left : 125,
    top : 40,
    color : '#4FC3F7',
    fontSize : 20,

  },
  PolarityText : {
     color : '#2522b6ff',
     fontSize : 15 ,
     fontWeight : 'bold',
     marginBottom : 10
  }
  
})