import { Text, View } from "react-native";
import { NoLoginStylesheet } from "./NoLoginStylesheet";

export function NoLoginView(){
  return(
    <View style={NoLoginStylesheet.container}>
      <Text style={NoLoginStylesheet.Text}>você não está logado, Faça login para acessar esta página</Text>
    </View>
  )
}