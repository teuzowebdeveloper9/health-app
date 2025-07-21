import { StyleSheet } from "react-native";

export const SearchBarStylesheet = StyleSheet.create({
  container : {
    flexDirection : "row",
    borderWidth : 2,
    height : 48,
    width : 200,
    borderRadius : 10,
    margin : 10,
    borderColor : '#1172e0ff'
  },
  View : {
    display : "flex",
    justifyContent : "center",
    marginRight : 60
  },
  searchIcon : {
    alignSelf : "center",
    paddingHorizontal : 10
  },
  placeholder : {
      fontSize : 15,
      fontWeight : 'bold',
      justifyContent : 'center',
      paddingTop : 10,
      alignItems : 'center',
      color : '#1172e0ff'
  }
})