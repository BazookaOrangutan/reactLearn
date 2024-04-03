import React, {useReducer} from "react";
import {inc, dis, reducer} from "./reduserCount";
export default function CountReducer(){
    const [state, dispatch] = useReducer(reducer,{counter: 0});
    
    return(
        <>
        <h1>Clicker</h1>
        <button onClick={()=>dispatch(inc(1))}>Click + 1: {state.counter} </button>
        <button onClick={()=>dispatch(dis(1))}>Click - 1: {state.counter}</button>
        <button onClick={()=>dispatch(inc(2))}>Click + 2: {state.counter}</button>
        <button onClick={()=>dispatch(dis(2))}>Click - 2: {state.counter}</button>
        </>
    )
}