import { useState } from "react";
function MyForm3(){
    const [s,setSize]=useState("medium");
    function OptionChange(event){
        setSize(event.target.value);
    }
    return(
        <>
        <h3> select pizza size</h3>
        <form>
            <input type="radio" name="ps" value="regular" checked={s==="regular"} onChange={OptionChange}/>
            <label>Regular</label>
            <input type="radio" name="ps" value="medium" checked={s==="medium"} onChange={OptionChange}/>
            <label>medium</label>
            <input type="radio" name="ps" value="large" checked={s==="large"} onChange={OptionChange}/>
            <label>large</label>
            
        </form>
        <p>selected size{s}</p>
        </>
    )
}export default MyForm3