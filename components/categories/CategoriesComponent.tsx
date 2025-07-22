import { opinioesMedicos } from "@/constants/opinions";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { CategoriesStylesheet } from "./CategoriesStylesheet";
import { useState } from "react";

export function CategoriesComponent() {
  const [selected, setSelected] = useState(0);

  const RenderItem = ({ titulo, index }: { titulo: string; index: number }) => (
    <TouchableOpacity
      style={[
        CategoriesStylesheet.item,
        selected === index && CategoriesStylesheet.itemSelected,
      ]}
      onPress={() => setSelected(index)}
    >
      <Text style={CategoriesStylesheet.title}>{titulo}</Text>
    </TouchableOpacity>
  );

  console.log("Selecionado:", selected);

  return (
    <View>
      <FlatList
        data={opinioesMedicos}
        horizontal
        style={CategoriesStylesheet.FlatList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <RenderItem titulo={item.titulo} index={index} />
        )}
      />
    </View>
  );
}
