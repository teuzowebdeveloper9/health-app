import { User } from "./userTypes"

export type HandleEditUserType = {
  user : User,
  name : string,
  email : string,
  especialidade : string,
  password : string,
  imageURL : string
}