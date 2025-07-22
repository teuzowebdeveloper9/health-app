import { DoutoresHospitalFicticio } from "@/constants/DoctorsList";
import { AuthContext } from "@/context/loginContext";
import { useContext } from "react";
import { FlatList, Image, Text, View } from "react-native";

export function DoctorsComponents(){
    const {signOut} = useContext(AuthContext)

  return (
    <>
    <View style={{display : 'flex',flexDirection : 'row',justifyContent : 'space-around',marginTop : 10}}>
      <Text style={{fontSize : 10,fontWeight : 'bold',color : '#4FC3F7'}}>top doctors</Text>
       <Text style={{fontSize : 10,fontWeight : 'normal',color : 'black'}}>see all</Text>
    </View>
     <FlatList 
        data={DoutoresHospitalFicticio}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return(
           <View style={{display : 'flex', flexDirection : 'column', padding : 5, height : 400, width : 200,justifyContent : 'flex-start', alignItems : 'center',marginTop : 15,borderWidth : 5,borderColor : '#4FC3F7', margin : 5,borderRadius : 15}}>
                  <Text onPress={() => signOut()} style={{fontWeight : 'bold',color : 'black',marginTop : 8}}>{item.nome}</Text>
                  <Image
                  
                   source={{uri : item.foto}}
                   style={{ marginTop : 10,width: 100, height: 100, borderRadius: 50 }}
                  />
                  <Text style={{fontWeight : 'bold', color : 'black',marginTop : 3}}>{item.especialidade}</Text>
                  <Text style={{fontWeight : 'normal', color : 'black',marginTop : 3}}>{item.anosExperiencia} anos de experiência</Text>
                  <Text style={{fontWeight : 'normal', color : 'black',marginTop : 3,justifyContent : 'center',alignContent : 'center',padding : 5}}>{item.bio}</Text>
           </View>
          )
        }}
       />
    </>

  )
}