import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
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
// export interface mainData =
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
 * @component
 */
export default function UserContextProvider({
  children,
  userId,
}: UserContextProviderProps) {
  let endPoint =
    import.meta.env.MODE === "development"
      ? `${userId}`
      : `${userId}/mainData.json`;
  const { response, loading, error } = useAxios<UserExempleProps>(
    `/${endPoint}`
  );

  return (
    <UserContext.Provider value={{ response, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}
