import { ButtonProps } from "@/app/types/ButtonProps";
import { Pressable, Text, View } from "react-native";
import { ButtonStylesheet } from "./ButtonStylesheets";

export  function Button({label} : ButtonProps){
  return(
    
    <View  style={ButtonStylesheet.button}>
      <Text style={ButtonStylesheet.Text}>
        {label}
      </Text>
    </View>
  )
}