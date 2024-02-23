import React,{useContext, useState} from "react";
import styleContext from "../Context/styleContext";


const Hello=() =>{
    const {theme,lightTheme, darkTheme} = useContext(styleContext);
    const [isDark,setIsDark] = useState(false);

    function switchTheme(){
        if(isDark===false){
            darkTheme();
        }
        else{
            lightTheme();
        }
        setIsDark(!isDark);
    }
    return(
        <div>
        <div style={{
            color:theme.color,
            backgroundColor:theme.backgroundColor,
            border:theme.border
        }}>
            <h1>Hello</h1>
            <p>Lorem 50
                hduhwdhwo
                dhduwhd
                dejdwdjiuhuigigigi
            </p>
            <ol>
                <li>one</li>
                <li>one</li>
                <li>one</li>
            </ol>
        </div>
        <button onClick={switchTheme}>Switch theme</button>


        {/* <button onClick={darkTheme}>dark theme</button>
        <button onClick={lightTheme}>light theme</button> */}
        </div>
        
    )
}
export default Hello