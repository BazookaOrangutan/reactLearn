import { BrowserRouter, Routes, Route, Outlet, useParams } from "react-router-dom";
import Nav from "../component/Nav";
let pathes = [
    {
        path:"movies",
        value: "Movies news"
    },
    {
        path: "serials",
        value: "TV series news"
    }
]

function Movies() {
    return (
        <>
            <h2>Movies</h2>
            <p>News of movies</p>
        </>
    )
}

function Serials() {
    return (
        <>
            <h2>Serials</h2>
            <p>News of serials</p>
        </>
    )

}

function New(){
    const {id} = useParams();
    return(
        <>
            <h2>New</h2>
            <h3>{id}</h3>
        </>
    )
}

function News() {
    return (
        <>
            <h2>News</h2>
            <Nav data={pathes}/>
            <Outlet/>
        </>
    )
}

export  {News, Serials, Movies, New};