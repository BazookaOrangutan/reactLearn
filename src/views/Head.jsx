import "./head.css";
import Nav from "../component/Nav";
let pathes = [
    {
        path:"/",
        value: "Main page"
    },
    {
        path: "about",
        value: "About"
    },
    {
        path:"news",
        value: "News"
    },
    {
        path: "films",
        value: "Films"
    }
]
function Head(){
    return(
        <header className="header">
        <h3>Logo</h3>
        <Nav data={pathes}/>
        </header>
    )
}
export default Head;