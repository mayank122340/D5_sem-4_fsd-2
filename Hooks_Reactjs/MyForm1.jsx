import {useState} from "react";
function MyForm1(){
    const [txtarea,setTextarea]=useState("hello world...")
    function handleChange(event){
        setTextarea(event.target.value);
    }
    return(
        <form>
            <textarea value={txtarea} onChange={handleChange}/>
            <p>{txtarea}</p>
        </form>
    )
}
export default MyForm1
