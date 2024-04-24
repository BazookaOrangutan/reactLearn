import { BrowserRouter, Routes, Route, Outlet, useParams } from "react-router-dom";
import Nav from "../component/Nav";
import films from "../films";

let filmAll = films();

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
    let {title} = useParams();
    title = title.replace(/^\w/,  letter=>letter.toUpperCase()).replace(/_/g, under => ' ');
    let filmView = filmAll.find((film) => film.Title === title);
    return(
        <>
            <h3>{title}</h3>
            <img src={filmView.Poster}></img>
            <p>{filmView.Year}</p>
            <p>{filmView.Director}</p>
            <p>{filmView.Plot}</p>
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