import { BrowserRouter, Routes, Route, Outlet, useParams } from "react-router-dom";
import Nav from "../component/Nav";

let pathes = [
    {
        path:"avatar",
        value:"Avatar"
    },
    {
        path:"300",
        value: "300"
    },
    {
        path:"the_Avengers",
        value:"The Avengers"
    }
]


function Film(){
    const {title} = useParams();
    return(
        <>
            <h3>{title}</h3>
        </>
    )
}

function Films() {
    return (
        <>
            <h2>Films</h2>
            <Nav data={pathes}/>
            <Outlet/>
        </>
    )
}

export {Films, Film};