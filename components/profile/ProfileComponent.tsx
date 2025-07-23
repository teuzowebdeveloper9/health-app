import { AuthContext } from "@/context/loginContext";
import { useContext, useState } from "react";
import { Image, Text, View } from "react-native";
import noPhotoProfile from '../../images/no-profile-picture-icon.webp' 

  import { unwrapOptionalString } from "@/utils/unwrapUrl";
import { HeaderStylesheet } from "../Header/HeaderStylesheets";
import { ProfileStylesheet } from "./ProfileStylesheet";
import EditComponent from "../EditComponent/EditComponent";
import axios from "axios";
import { HandleEditUser } from "@/types/HandleEditType";

export default function ProfileComponent({ user,signOut }){
   const handleEditUser = async ({user, email,especialidade,imageURL,name,password} : HandleEditUser) => {
    if(!email || !especialidade || !imageURL || !name || !password){
      return {
        message : "Preencha todos os dados"
      }
    }
  
    try{
      const  response = await axios.patch(`http://localhost:8080/${user?.id}`,{
        email,
        especialidade,
        imageURL,
        name,
        password
      })
      return response.data
    }catch(error){
      console.log(error)
    }
    
  
  }
   
   const [isVisible,setIsVisible] = useState(false)
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
        <View style={{flexDirection : "row"}}>
           <View style={ProfileStylesheet.excludeButton} >
          <Text onPress={() => signOut()} style={ProfileStylesheet.excludeText}>logout</Text>
        </View>
        <View style={ProfileStylesheet.editButton}>
           <Text style={ProfileStylesheet.excludeText} onPress={() => setIsVisible(true)}>edit</Text>
        </View>
        </View>  
       <EditComponent 
       handleEdit={handleEditUser}
        user={user}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
       />  
      </View>

    </View>
  )
}