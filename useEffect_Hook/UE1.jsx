import { useState,useEffect } from "react";
function UE1(){
    const[count,setcount]=useState(0);
    const[calculation,setcalc]=useState(0);

    //when the pg is rendered for first time & also when btn a count clciked
    useEffect(()=>
    {
        alert("clicked1")
    },[count]);
    //only once when the pg is rendered 
    useEffect(()=>{
        alert("clicked2");
    },[]);

    //when the page is rendered for first time & also on every update/event triggered

    useEffect(()=>
    {
        alert("clicked3")
    });
    const changeCount=()=>{
        setcount(count+1);
    }
    const changeCalc=()=>{
        setcalc(calculation+1);
    }
    return(
        <>
        <button onClick={changeCount}>Button A{count}</button><br/>
        <button onClick={changeCalc}>Button B{calculation}</button>
        </>
    )
}export default UE1