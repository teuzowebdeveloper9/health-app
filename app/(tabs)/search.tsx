import { SearchScreenStylesheet } from "@/stylesheets/SearchStylesheets";
import { Text, View } from "react-native";

export default function search(){
  return (
    <View style={SearchScreenStylesheet.View}>
      <View style={SearchScreenStylesheet.SubView}>
        <Text style={SearchScreenStylesheet.SearchText}> Search ...</Text>
      </View>
    </View>
  )
}