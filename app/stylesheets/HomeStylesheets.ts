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
    height : 400,
  },
  medical : {
    display : 'flex',
    position :'absolute',
    top : 130,
    left : 120
  },
  lowView : {
    marginTop : 400,
    flex:0.45,
    width : '100%',
    minHeight : 500,  
    backgroundColor : '#fff',
    borderRadius : 20
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
    justifyContent : 'center',
    alignSelf : 'center',
    color : 'gray'
  },
   ViewButton : {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 35,
   }
});
