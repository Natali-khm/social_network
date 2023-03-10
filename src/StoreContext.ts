import React from "react";
import { StoreType } from "./redux/testState";

export const StoreContext = React.createContext<StoreType | null>(null)