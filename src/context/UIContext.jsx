import { createContext, useContext, useState } from "react";

const UIContext  = createContext();

export const UIProvide =({children})=>{
       const [activeApp, setActiveApp] = useState("home")
   const openApp =(appName)=> setActiveApp(appName)
    return(
      <UIContext.Provider value={{ activeApp, openApp }}>
      {children}
    </UIContext.Provider>

    )
}

export const useUI = () => useContext(UIContext);