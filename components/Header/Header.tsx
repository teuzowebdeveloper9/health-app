import { Image, Text, View } from "react-native";
import { HeaderStylesheet } from "./HeaderStylesheets";
import noPhotoProfile from '../../images/12225881.png'
import { useContext } from "react";
import { AuthContext } from "@/context/loginContext";
import {Feather} from '@expo/vector-icons'
import { SearchBar } from "../SearchBar/SearchBar";
import { unwrapOptionalString } from "@/utils/unwrapUrl";

export function Header(){
  const {user} = useContext(AuthContext) 

  console.log(user)

  return(
    <View style={HeaderStylesheet.container}>
      <View style={HeaderStylesheet.profile}> 
         <Image style={HeaderStylesheet.Image}  source={
    user?.imageURL
      ? { uri: unwrapOptionalString(user.imageURL) }
      : noPhotoProfile
  } />
         
           <View style={HeaderStylesheet.bio}>
              <Text style={HeaderStylesheet.textWelcome}>hello, welcome 🎉 <Feather style={HeaderStylesheet.bell}  name="bell" color="white" size={25} /></Text>
              <Text style={HeaderStylesheet.textWelcome}>{user?.name}</Text>
              <SearchBar />
           </View>
      </View>
      <View>
          
      </View>
    </View>
  )
}
