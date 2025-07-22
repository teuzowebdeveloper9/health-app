import { Button } from "@/components/Button/Button";
import { ExcludeModalComponent } from "@/components/excludeModal/excludeModalComponent";
import { ModalSearchComponent } from "@/components/ModalSearch/ModalSearchComponent";
import { NoLoginView } from "@/components/NoLogin/NoLoginComponents";
import { SearchBarStylesheet } from "@/components/SearchBar/SearchBarStylesheet";
import { AuthContext } from "@/context/loginContext";
import { SearchScreenStylesheet } from "@/stylesheets/SearchStylesheets";
import { SearchResponseAPI } from "@/types/SearchResponseAPI";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useContext, useState } from "react";
import { TextInput, View,Text, FlatList } from "react-native";

export default function Search() {

  const { user } = useContext(AuthContext)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isExcludeModalVisible, setIsExcludeModalVisible] = useState(false)
  

   if (user === null) {
      return (
         <NoLoginView />
      ); 
    }

  const [searchText, setSearchText] = useState("")
  const [response,setResponse] = useState<SearchResponseAPI[]>([])

  const onChange = (text : string) => {
    setSearchText(text)
    console.log(searchText)
  }

  const handleSearch = async () => {
    const SearchedName = encodeURI(searchText.trim())

   const response = await axios.get(`http://localhost:8080/users/search/${SearchedName}`)

   const saveSearch = await axios.post(
  `http://localhost:8080/search-history/?userId=${user.id}&text=${SearchedName}`
);

   const data = response.data

    setResponse(data)    
  }

  return (
    <>
    <View style={SearchScreenStylesheet.View}>
      <View style={SearchScreenStylesheet.SubView}>
        <View style={{flexDirection : "row",display : "flex"}}>

        <TextInput
          style={SearchScreenStylesheet.SearchText}
          placeholder="search doctor"
          placeholderTextColor="gray"
          onChangeText={onChange}
          
        />
        <Feather onPress={handleSearch} style={SearchBarStylesheet.searchIcon} name="search" size={24} color="gray" />
      </View >
      </View>
    </View>
    <View style={{display : 'flex',flexDirection:'row',justifyContent : "space-around"}}>
          <View style={SearchScreenStylesheet.RecentView}>
             <Text onPress={() => setIsModalVisible(true)} style={SearchScreenStylesheet.TextButton}>recent searches</Text>
          </View>
          <View style={SearchScreenStylesheet.ExcludeView}>
             <Text style={SearchScreenStylesheet.TextButton} onPress={() => setIsExcludeModalVisible(true)}>exclude searches</Text>
          </View>
      </View>
     <ModalSearchComponent
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
      <ExcludeModalComponent 
       isVisible={isExcludeModalVisible}
       onClose={() => setIsExcludeModalVisible(false)}
      />
      {response.length > 0 && (
            

                <FlatList
                  data={response}                
                  horizontal
                  keyExtractor={response => response.id}
                  showsHorizontalScrollIndicator={false}  
                  renderItem={({item,index}) => {
                    return(
                      <View key={index} style={{display : 'flex', flexDirection : 'column', padding : 5, height : 400, width : 300,justifyContent : 'flex-start', alignItems : 'center',marginTop : 15,borderWidth : 5,borderColor : '#4FC3F7', margin : 5,borderRadius : 15}}>
                        <Text style={{marginBottom : 12, fontSize : 20, fontWeight : 'bold',color : "#4FC3F7" }}>{response.length} encontrado</Text>
                        <Text style={{fontSize : 15,fontWeight : 'light', marginBottom : 10}}>nome : {item.name}</Text>
                        <Text style={{fontSize : 12, fontWeight : 'bold', marginBottom : 10}}>especialidade : {item.especialidade} </Text>
                        <Text style={{fontSize : 12,fontWeight : 'bold',marginTop : 10, marginBottom : 10}}>id : {item.id}</Text>
                        <Text style={{fontSize : 12,fontWeight : 'bold',marginTop : 10, marginBottom : 25}}>email : {item.email}</Text>
                        <View style={{flexDirection : "row"}}>
                         <Button label=" consulta" />
                        </View>
                      </View>
                    )
                  }}
                  
                />
                
          )
          }
    </>
  );
}
