import React,{createContext} from "react";
import C1 from "./C1";
const Fname=createContext();
const Lname=createContext();
function Pc(){
    return(
        <>
        <Fname.Provider value='ABC'>
            <Lname.Provider value='XYZ'>
                <C1/>
            </Lname.Provider>
        </Fname.Provider>
        </>
    )
}export default Pc;
export {Fname,Lname}