import React, { ReactNode } from "react";
import useAxios, { RequestResponse } from "../hooks/useAxios";
type UserInfos = {
  firstName: string;
  lastName: string;
  age: number;
};
type KeydataProps = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};
export interface UserExempleProps {
  id: number;
  userInfos: UserInfos;
  todayScore?: number;
  score?: number;
  keyData: KeydataProps;
}
/**
 * Create the context for the user at the route http://localhost:5173/user/${userId}`
 * @returns null | <RequestResponse<UserExempleProps>
 */
export const UserContext =
  React.createContext<RequestResponse<UserExempleProps> | null>(null);
interface UserContextProviderProps {
  children: ReactNode;
  userId: number | string | undefined;
}
/**
 *  Return the context provider of the data of type UserExempleProps
 * Allow nested children to access the same data
 * @param {ReactNode} children
 * @param {String} userId
 * @returns JSX.Element
 */
export default function UserContextProvider({
  children,
  userId,
}: UserContextProviderProps) {
  /**
   * fetch the data of the user , name etc
   * @returns {response typeof <RequestResponse<UserExempleProps>, loading: boolean}
   */
  const { response, loading } = useAxios<UserExempleProps>(
    {
      method: "GET",
      url: `http://localhost:5173/user${userId}Data.json`,
      headers: {
        accept: "*/*",
      },
    },
    "mainData"
  );
  return (
    <UserContext.Provider value={{ response, loading }}>
      {children}
    </UserContext.Provider>
  );
}
