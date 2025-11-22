import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext()
export const ThemeProvider =({children})=>{
    const [theme,setTheme] = useState(()=>{
        return localStorage.getItem("theme") || "light"
    })

    useEffect(() => {
    applyThemeVariables(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

    const applyThemeVariables = (mode) => {
    const root = document.documentElement;

    if (mode === "light") {
      root.style.setProperty("--bg-gradient-start", "#faecec");
      root.style.setProperty("--bg-gradient-middle-1", "#f0faf2");
      root.style.setProperty("--bg-gradient-middle-2", "#e2eef6");
      root.style.setProperty("--bg-gradient-end", "#f5f6e7");
      root.style.setProperty("--grid-color", "#e0e3e3");
    }

    if (mode === "dark") {
      root.style.setProperty("--bg-gradient-start", "#070D59");
      root.style.setProperty("--bg-gradient-middle-1", "#3674B5");
      root.style.setProperty("--bg-gradient-middle-2", "#1363DF");
      root.style.setProperty("--bg-gradient-end", "#47B5FF");
      root.style.setProperty("--grid-color", "#e0e3e3");
    }
  };

  const toggleTheme = ()=>{
    setTheme((prev)=>(prev === "light"?"dark":"light"))
  }

  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  )


}

export const useTheme = () => useContext(ThemeContext);