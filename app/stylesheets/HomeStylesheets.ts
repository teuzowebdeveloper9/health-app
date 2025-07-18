import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ImageBackground : {
    flex:1,
    width : '100%',
    height : '100%',
  },
  medical : {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',

  },
  lowView : {
    flex:0.45,
    width : '100%',
    minHeight : 500,  
  },
  welcomeText : {
    display : 'flex', 
    alignContent : 'center',
    justifyContent : 'center',
    fontSize : 24,
    fontWeight : 'bold',
    paddingVertical : 10
  },
  bannerText : {
    fontSize : 18,
    paddingHorizontal : 10,
    paddingVertical : 10,
    alignSelf : 'center',
    color : 'gray'
  }
});
