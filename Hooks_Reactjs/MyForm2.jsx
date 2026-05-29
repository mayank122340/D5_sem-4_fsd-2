import {useState} from "react";
function MyForm2(){
    const [myCar,setMyCar]=useState("volvo...")
    function handleChange(event){
        setMyCar(event.target.value);
    }
    return(
        <form>
           <select value={myCar} onChange={handleChange}>
            <option value="ford">Ford</option>
            <option value="bmw">bmw</option>
            <option value="ferrari">ferrari</option>
            <option value="mercedys">mercedys</option>

           </select>
           <p>{myCar}</p>
        </form>
    )
}
export default MyForm2
