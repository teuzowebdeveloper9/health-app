import { StyleSheet } from "react-native";

export const EditComponentStylesheet = StyleSheet.create({
 
  Blur : {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  },
  EditBox : {
    height : 400,
    width : 300,
    borderWidth : 2,
    borderColor : "#4FC3F7",
    backgroundColor : "#ffffffff"
  },
  Header : {
    flexDirection : "row",
    justifyContent : "space-around",
    alignItems : "center"
  },
  Title : {
    color : "#4FC3F7",
    fontSize : 15,
    fontWeight :"bold",
    margin : 5,
    marginTop : 10
  },
  Box : {
    justifyContent : "center",
    alignItems : "center",
    padding : 15
  },
  label : {
     color : "#4FC3F7",
    fontSize : 15,
    fontWeight :"bold",
    margin : 5,
  }

}) 