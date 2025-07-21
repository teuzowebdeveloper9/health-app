import { NoLoginView } from "@/components/NoLogin/NoLoginComponents";
import { SearchBarStylesheet } from "@/components/SearchBar/SearchBarStylesheet";
import { AuthContext } from "@/context/loginContext";
import { SearchScreenStylesheet } from "@/stylesheets/SearchStylesheets";
import { Feather } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { TextInput, View,Text } from "react-native";

export default function Search() {

  const { user } = useContext(AuthContext)

   if (user === null) {
      return (
         <NoLoginView />
      ); 
    }

  const [searchText, setSearchText] = useState("")

  const onChange = (text : string) => {
    setSearchText(text)
    console.log(searchText)
  }

  return (
    <>
    <View style={SearchScreenStylesheet.View}>
      <View style={SearchScreenStylesheet.SubView}>
        <View style={{flexDirection : "row",display : "flex"}}>

        <TextInput
          style={SearchScreenStylesheet.SearchText}
          placeholder="search doctor"
          placeholderTextColor="gray"
          onChangeText={onChange}
          
        />
        <Feather style={SearchBarStylesheet.searchIcon} name="search" size={24} color="gray" />
      </View >
      </View>
    </View>
    <View style={{display : 'flex',flexDirection:'row',justifyContent : "space-around"}}>
          <View style={SearchScreenStylesheet.RecentView}>
             <Text style={SearchScreenStylesheet.TextButton}>recent searches</Text>
          </View>
          <View style={SearchScreenStylesheet.ExcludeView}>
             <Text style={SearchScreenStylesheet.TextButton}>exclude searches</Text>
          </View>
      </View>
    </>
  );
}
