import { StyleSheet } from "react-native";

export const CategoriesStylesheet = StyleSheet.create({
  FlatList: {
    marginTop : 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#6060a8ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  itemSelected: {
    backgroundColor: '#4FC3F7',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
});
