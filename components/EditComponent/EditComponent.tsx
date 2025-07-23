import { AuthContext } from "@/context/loginContext";
import { useContext, useState } from "react";
import { BlurView } from "expo-blur";
import { Pressable, Text, TextInput, View } from "react-native";
import { EditComponentStylesheet } from "./EditComponenStylesheet";
import { Feather } from "@expo/vector-icons";
import { EditComponentType } from "@/types/EditComponentType";
import { Button } from "../Button/Button";
import { handleEditUser } from "@/utils/HandleEditUser";

export default function EditComponent({handleEdit , user, isVisible,onClose} : EditComponentType){

  
  const [form,setForm] = useState({
        name : '',
        email : '',
        password : '',
        especialidade : ''
      })
    const handleChange = (name : string, value : string) => {
      setForm({
        ...form,
        [name] : value
      })
    } 
    if(!isVisible){
      return null
    }
    
  return(
      <BlurView intensity={50} style={EditComponentStylesheet.Blur}>
          <View style={EditComponentStylesheet.EditBox}>
            <View style={EditComponentStylesheet.Header}>
              <Text style={EditComponentStylesheet.Title}>Edit your profile</Text>
              <Feather onPress={onClose} name="x" color={"red"} size={30} style={{marginLeft : 40, marginTop : 10}} />
            </View>
            <View style={EditComponentStylesheet.Box}>
              <Text style={EditComponentStylesheet.label}>name</Text>
              <TextInput
              value={form.name}
              onChangeText={(text) => handleChange('name',text)}
               placeholderTextColor={"#4FC3F7"}
               style={{height : 20,borderColor : "#4Fc3f7",margin : 5}}
               placeholder={user?.name}
              />
               <Text style={EditComponentStylesheet.label}>email</Text>
               <TextInput
               value={form.email}
               onChangeText={(text) => handleChange('email',text)}
               placeholderTextColor={"#4FC3F7"}
               style={{height : 20,borderColor : "#4Fc3f7",margin : 5}}
               placeholder={user?.email}
              />
               <Text style={EditComponentStylesheet.label}>password</Text>
               <TextInput
               value={form.password}
               onChangeText={(text) => handleChange('password',text)}
               placeholderTextColor={"#4FC3F7"}
               style={{height : 20,borderColor : "#4Fc3f7",margin : 5}}
               placeholder={user?.password}
              />
              <Text style={EditComponentStylesheet.label}>your especiality</Text>
                <TextInput
               value={form.especialidade}
               onChangeText={(text) => handleChange('especialidade',text)}
               placeholderTextColor={"#4FC3F7"}
               style={{height : 20,borderColor : "#4Fc3f7",margin : 5}}
               placeholder={user?.especialidade}
              />
              <Pressable onPress={async () => {
                await handleEditUser({
                  user : user,
                  email : form.email,
                  especialidade : form.especialidade,
                  imageURL : user?.imageURL,
                  name : form.name,
                  password : form.password
                })
              }}>

                <Button label="edit"/>
              </Pressable>

            </View>
          </View>
      </BlurView>

   
  )
}