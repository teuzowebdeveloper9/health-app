import { ButtonProps } from "@/app/types/ButtonProps";
import { Text, TouchableOpacity, View } from "react-native";

export default function Button({label,onPress} : ButtonProps){
  return(
    <TouchableOpacity onPress={onPress}>
      <Text>
        {label}
      </Text>
    </TouchableOpacity>
  )
}