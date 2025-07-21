import { CategoriesComponent } from "@/components/categories/CategoriesComponent";
import { Header } from "@/components/Header/Header";
import { NoLoginView } from "@/components/NoLogin/NoLoginComponents";
import { AuthContext } from "@/context/loginContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";


export default function TabTwoScreen() {
  const Router = useRouter();
  const { user, signOut } = useContext(AuthContext);

  const handleLogout = async  () => {
    signOut()
    Router.replace('/')
  }
 
  if (user === null) {
    return (
       <NoLoginView />
    ); 
  }

  return (
     <ScrollView style={{flex : 1,backgroundColor : 'white'}}>
      <Header />
      <CategoriesComponent />
     </ScrollView>
  );
}