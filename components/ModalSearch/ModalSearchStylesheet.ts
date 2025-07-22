import { StyleSheet } from "react-native";


export const ModalSearchStylesheet = StyleSheet.create({
  FullscreenOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
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
    borderColor: "#4FC3F7",
    borderWidth: 2,
    padding: 20,
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Title: {
    color: "#4FC3F7",
    fontSize: 18,
    fontWeight: "bold",
  },
  ScrollView : {
    height : 150
  },
  Search : {
    color : "#4FC3F7",
    fontSize : 12,
    fontWeight : 'bold'  
  }
});
