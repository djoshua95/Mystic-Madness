"use client";

import { createContext } from "react";

const ThemeContext = createContext<{
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}>({ theme: "light", setTheme: () => {} });

export default ThemeContext;
