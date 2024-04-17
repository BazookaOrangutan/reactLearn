import { Link, NavLink } from "react-router-dom";
import './Nav.css';
export default function Nav(props) {
    const { data } = props;
    return (
        <nav className="nav">
            {data.map((link, id)=>
                // <Link to={link.path}>{link.value}</Link>)
                <NavLink to={link.path} key={link.path} className={({isActive}) => (isActive ? "active" : "")}>{link.value}</NavLink>
            )}


        </nav>

    )
}
