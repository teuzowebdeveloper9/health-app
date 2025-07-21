import { StyleSheet } from "react-native";

export const SearchScreenStylesheet = StyleSheet.create({
  View: {
    backgroundColor: '#4FC3F7',
    height: 85,
  },
  SubView: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  SearchText: {
    flex: 1,
    fontWeight: 'bold',
    color: 'black',
    width: '85%',
  },
  RecentView : {
    padding : 10,
    backgroundColor : '#4FC3F7',
    borderRadius : 10,
    marginHorizontal : 20,
    marginVertical : 10,
  },
    ExcludeView : {
    padding : 10,
    backgroundColor : 'red',
    borderRadius : 10,
    marginHorizontal : 20,
    marginVertical : 10,
  },
  TextButton : {
    fontWeight : "bold",
    color : "white",
    padding : 5
  }
});
