import { TouchableOpacity, View } from "react-native";
import { SearchBarStylesheet } from "./SearchBarStylesheet";
import {Feather} from '@expo/vector-icons'
import { Text } from "react-native";
import { useRouter } from "expo-router";


export function SearchBar(){
    const Router = useRouter()

  return(
    <View  style={SearchBarStylesheet.View}>
        <TouchableOpacity onPress={() => Router.push('/(tabs)/search')} style={SearchBarStylesheet.container} >
            <Feather style={SearchBarStylesheet.searchIcon} name="search" size={24} color="#1172e0ff" />
            <Text style={SearchBarStylesheet.placeholder}>{"search doctor ..."}</Text>
        </TouchableOpacity>
    </View>
  )
}