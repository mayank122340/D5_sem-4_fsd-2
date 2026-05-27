import React,{useState} from "react";
function US1(){
    const[count,setCount]=useState(0);
    function handleCount(){
        setCount(count+1)
    }
    return(
        <>
        <p>U clcicked {count} times</p>
        <button onClick={handleCount}>Click me </button>
        </>
    );
}export default US1;