import { StyleSheet } from "react-native";

export const ProfileStylesheet = StyleSheet.create({
  component : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 35
  },
  box : {
    height : 400,
    width : 300,
    backgroundColor: '#ffffffff',
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : "center",
    borderWidth : 2,
    borderColor : "#4FC3F7"
  },
  name : {
    color : "#4FC3F7",
    fontSize : 15,
    fontWeight :"bold",
    margin : 5,
    marginTop : 25
  },
   id : {
    color : "#4FC3F7",
    fontSize : 12,
    fontWeight :"thin",
    margin : 5,
  },
  email : {
    color : "#4FC3F7",
    fontSize : 12,
    fontWeight :"thin",
    margin : 5,
  },
  excludeButton : {
    margin: 15,
    backgroundColor : 'red',
    width : 100,
    height : 30,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center'
  },
  editButton : {
    margin: 15,
    backgroundColor : '#4FC3F7',
    width : 100,
    height : 30,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center'
  },
  excludeText : {
    color : 'white',
    fontSize : 15,
    padding : 20,
    fontWeight : 'bold'
  }
})