// context/NavContext.jsx
"use client";

import { createContext, useContext } from "react";

export const NavContext = createContext([]);
export const useNavSections = () => useContext(NavContext);
