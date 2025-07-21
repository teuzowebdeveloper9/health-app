import { SearchScreenStylesheet } from "@/stylesheets/SearchStylesheets";
import { Text, TextInput, View } from "react-native";

export default function search(){
  return (
    <View style={SearchScreenStylesheet.View}>
      <View style={SearchScreenStylesheet.SubView}>
        <TextInput style={SearchScreenStylesheet.SearchText} placeholder="search doctor" />
      </View> 
    </View>
  )
}