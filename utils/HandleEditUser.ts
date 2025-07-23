import { AuthContext } from "@/context/loginContext";
import { HandleEditUser } from "@/types/HandleEditType";
import axios from "axios";
import { useContext } from "react";


export const handleEditUser = async ({user, email,especialidade,imageURL,name,password} : HandleEditUser) => {
  if(!email || !especialidade || !imageURL || !name || !password){
    return {
      message : "Preencha todos os dados"
    }
  }

  try{
    const  response = await axios.patch(`http://localhost:8080/${user?.id}`,{
      email,
      especialidade,
      imageURL,
      name,
      password
    })
    return response.data
  }catch(error){
    console.log(error)
  }
  

}