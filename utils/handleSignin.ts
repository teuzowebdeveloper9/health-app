import axios from "axios"

export const handleSignin = async (name : string , email : string, password : string) => {
  try{
    if(!name || !email || !password){
      return {
        message : 'fill all fields'
      }
    }


   const response = await axios.post("http://localhost:8080/users/",{
      name,
      email,
      password
    })

    return {
      status : response.status,
      data : response.data
    }
  }
  catch(error){
     console.error(error) 
  }
}