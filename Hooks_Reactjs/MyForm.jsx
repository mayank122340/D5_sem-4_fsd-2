import { useState } from "react";
function MyForm(){
    const[name,setName]=useState("");
    function handleSubmit(event){
        event.preventDefault();
        alert(`The name u entered was :${name}`);

    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            </label>
            <input type="submit"/>
        </form>
    )
}export default MyForm