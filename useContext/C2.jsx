import React,{useContext} from "react";
import { Fname,Lname} from "./Pc";

function C2(){
    const fn=useContext(Fname)
    const ln=useContext(Lname)

    return(
        <h1>WELCOME{fn}{ln}</h1>
    )
}export default C2