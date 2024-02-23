import React,{useState} from "react";
import styleContext from "./styleContext";

const StyleProvider=(props)=>{

    const [theme,setTheme] = useState({
        color:"red",
        backgroundColor:"white",
        border:"1px solid black"
    })


    return(
        <div>
            <styleContext.Provider value={
                {
                    theme:theme,
                    lightTheme: ()=>setTheme({...theme,color:"red",backgroundColor:"white",border:"2px solid black"}),
                    darkTheme: ()=>setTheme({...theme,color:"wgite",backgroundColor:"black",border:"2px solid green"}),
                
                }}>
                {props.children}
            </styleContext.Provider>

        </div>
    )
}
export default StyleProvider;