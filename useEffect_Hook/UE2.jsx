import { useState,useEffect } from "react";
function UE2(){
    const[date,setDate]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(()=>{
            setDate(new Date());

        },1000);
    },[]);

    return(
        <>
        <h1>
            Time using Location String 
            {date.toLocaleTimeString()}<br/>
            <br/>
            Hour-{date.getHours()}
            <br/>
            <br/>
            Min-{date.getMinutes()}
            <br/>
            <br/>
            Sec-{date.getSeconds()}
            <br/>
            <br/>
        </h1>
        </>
    );
}
export default UE2;