import { AuthContext } from "@/context/loginContext";
import { useContext } from "react";
import { Image, Text, View } from "react-native";
import noPhotoProfile from '../../images/no-profile-picture-icon.webp' 

  import { unwrapOptionalString } from "@/utils/unwrapUrl";
import { HeaderStylesheet } from "../Header/HeaderStylesheets";
import { ProfileStylesheet } from "./ProfileStylesheet";

export default function ProfileComponent(){
   const {user, signOut} = useContext(AuthContext)
  return(
    <View style={ProfileStylesheet.component}>
      <View style={ProfileStylesheet.box}>

      
      <Image style={HeaderStylesheet.Image}  source={
          user?.imageURL
            ? { uri: unwrapOptionalString(user.imageURL) }
            : noPhotoProfile
        } />
      <Text style={ProfileStylesheet.name}> username: {user?.name}</Text>
      <Text style={ProfileStylesheet.id}> id : {user?.id}</Text>
        <Text style={ProfileStylesheet.email}>{user?.email}</Text>
        <View style={ProfileStylesheet.excludeButton} >
          <Text onPress={() => signOut()} style={ProfileStylesheet.excludeText}>logout</Text>


        </View>
      </View>

    </View>
  )
}