import axios from "axios"

export const handleLogin = async ( email : string, password : string) => {
  try{
    if( !email || !password){
      return {
        message : 'fill all fields'
      }
    }


   const response = await axios.post("http://localhost:8080/users/login",{
      email,
      password
    })

    return response.data
  }
  catch(error){
     console.error(error) 
  }
}