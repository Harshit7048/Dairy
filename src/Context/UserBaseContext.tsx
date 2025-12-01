import React, { createContext } from "react";
import type { UserBase } from "./types";

const UserBaseContext = createContext<UserBase | null>(null);

export default UserBaseContext;
