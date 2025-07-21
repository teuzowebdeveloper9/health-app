import { StyleSheet } from "react-native";

export const HeaderStylesheet = StyleSheet.create({
  container : {
    height: 200,
    justifyContent : 'center',
    alignItems : "center",
    backgroundColor : '#4FC3F7'
  },
  profile : {
    padding : 20,
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  Image : {
    height : 75,
    width : 75,
    borderRadius : 100
  },
  bio : {
    display : 'flex',
    flexDirection : 'column',
    paddingLeft : 8
  },
  textWelcome : {
    fontWeight : 'bold',
    fontSize : 15,
    color : 'white',
    paddingRight :105,
    paddingTop : 5,  
    marginBottom : 10
  },
  bell : {
    marginLeft: 60
  }
 
})