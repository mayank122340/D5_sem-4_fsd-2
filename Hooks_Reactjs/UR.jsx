import React,{useReducer} from "react";
const initialstate=0;
function reducer (state,action){
    if(action.type==='increment'){
        return state+1;
    }
}
function UR(){
    const[state,dispatch]=useReducer(reducer,initialstate);
    return(
        <button onClick={()=>dispatch({type:'increment'})}>Click me({state})</button>

    );
}export default UR;