import { User } from "./userTypes";

export type AuthContextType = {
  user: User | null;  // <-- aceita null
  signIn: (user: User) => void;
  signOut: () => void;
};