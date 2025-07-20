import { AuthContextType } from "@/types/AuthContextType";
import { AuthProviderProps } from "@/types/AuthProviderType";
import { User } from "@/types/userTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{createContext,useState, ReactNode, useEffect} from "react";


export const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({children} : AuthProviderProps) => {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem("@user")

      if(userData){
        setUser(JSON.parse(userData))
        console.log("tem um user setado já")
      }
    }
    loadUser()
  } , [] )

  const signIn = async (user : {name : string, email : string, password : string}) => {
    await AsyncStorage.setItem("@user", JSON.stringify(user))
    setUser(user)
  }

  const signOut = async () => {
    await AsyncStorage.removeItem("@user");
    setUser({
      name : '',
      email : '',
      password : ''
    })
    console.log("não tem mais user setado")
  }

  return (
    <AuthContext.Provider value={{user,signIn,signOut}}>
      {children}
    </AuthContext.Provider>
  )
}