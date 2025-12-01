import React, { ReactNode, useState } from "react";
import UserBaseContext from "./UserBaseContext";
import userBaseData from "../Assets/userBase";
import type { UserBase } from "./types";

interface Props {
  children: ReactNode;
}

export default function UserBaseContextProvider({ children }: Props) {
  const [userId, setUserId] = useState<number>(1);

  const userBaseDataFiltered = userBaseData.filter(
    (user: UserBase) => user.userId === userId
  );

  const userBaseDataFinal =
    userBaseDataFiltered.length > 0 ? userBaseDataFiltered[0] : null;

  return (
    <UserBaseContext.Provider value={userBaseDataFinal}>
      {children}
    </UserBaseContext.Provider>
  );
}
