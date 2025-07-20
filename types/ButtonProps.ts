import { GestureResponderEvent } from "react-native";

export type ButtonProps = {
  label: string,
  onpress?: (event: GestureResponderEvent) => void,
};