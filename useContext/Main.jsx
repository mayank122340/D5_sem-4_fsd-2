import React,{createContext} from "react";
import Comp from './Comp';
const Fname=createContext();
function Main(){
    return(
        
            <Fname.Provider value="Ram"><Comp/></Fname.Provider>
        
    );
}export default Main;
export{Fname}