import { User } from "./userTypes";

export type EditComponentType = {
  user : User
  isVisible: boolean;
  onClose: () => void;
  handleEdit : ():  HandleEditUserType => void;
};