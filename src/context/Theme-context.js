const { createContext, useEffect } = require("react");
const { useState } = require("react")



const initialState ={
    dark:false,
    theme:"light"
    }

let themeContext = createContext();

const themes = {
    dark: {
        background : "black",
        color: "white"
    },
    light :{
        background: "white",
        color:"black"
    }
}
let theme = themes[initialState.theme]


function ThemeProvider({children}){

    const [ dark,setDark] = useState(initialState.dark);
    useEffect(()=>{
        const isDark = localStorage.getItem("dark") == "true"
        setDark(isDark)
    },[dark])
    
    function toggle(){
    localStorage.setItem("dark",JSON.stringify(!dark))
    theme = dark?themes.light :themes.dark
    setDark(!dark)
}

    return(
        <themeContext.Provider value={{theme,dark,toggle}}>
            <div>{children}</div>
        </themeContext.Provider>
        
    )
}

export {ThemeProvider,themeContext}