import { StyleSheet } from "react-native";


export const ExcludeModalStylesheet = StyleSheet.create({
  FullscreenOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  },
  Blur: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalBox: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 12,
    borderColor: "red",
    borderWidth: 2,
    padding: 20,
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Title: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    
  },
  ScrollView : {
    height : 150
  },
  Search : {
    color : "red",
    fontSize : 12,
    fontWeight : 'bold',
    margin : 20,
    padding : 5  
  }
});
