import { ButtonProps } from "@/types/ButtonProps";
import { Pressable, Text, View } from "react-native";
import { ButtonStylesheet } from "./ButtonStylesheets";

export  function Button({label,onpress} : ButtonProps){
  return(
    <View  style={ButtonStylesheet.button}>
      <Text style={ButtonStylesheet.Text}>
        {label}
      </Text>
    </View>

  )
}