import { opinioesMedicos } from "@/constants/opinions";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { CategoriesStylesheet } from "./CategoriesStylesheet";
import { useState } from "react";

export function CategoriesComponent() {
  const [selected, setSelected] = useState(0)

  const RenderItem = ({ titulo } : string) => (
    <TouchableOpacity style={CategoriesStylesheet.item}>
      <Text style={CategoriesStylesheet.title}>{titulo}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={opinioesMedicos}
        horizontal
        style={CategoriesStylesheet.FlatList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <RenderItem {...item} />}
      />
    </View>
  );
}
