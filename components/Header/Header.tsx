import { Image, Text, View } from "react-native";
import { HeaderStylesheet } from "./HeaderStylesheets";
import noPhotoProfile from '../../images/12225881.png'
import { useContext } from "react";
import { AuthContext } from "@/context/loginContext";

export function Header(){
  const {user} = useContext(AuthContext) 

  return(
    <View style={HeaderStylesheet.container}>
      <View style={HeaderStylesheet.profile}>
           <Image style={HeaderStylesheet.Image} source={user?.URLimage ||  noPhotoProfile} />
      </View>
    </View>
  )
}
