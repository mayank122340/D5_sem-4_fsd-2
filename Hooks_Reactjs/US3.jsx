import React,{useState} from "react";

function US3(){
    const[name,setName]=useState("LJU");
    const[textcolor,setcolor]=useState("red");

    function changeName(){
        if(name==="LJU"){
            setName("Welcome Students");
        }
        else{
            setName("LJU");
        }
    }
    function changeColor(){
        if(textcolor==="red")
        {
            setcolor("blue")
        }
        else{
            setcolor("red")
        }
    }
    return(
        <>
        <button onClick={changeName}>Change Text</button>
        <button onClick={changeColor}>Change Color</button>
        <h1 style={{color:textcolor}}>{name}</h1>

        </>
    )
}export default US3