import "./Director.css";

export default function Director(props) {
    let { id, name, surname, removeDirector } = props;
    return (
            <li className="director container d-flex justify-content-between">
                {id}. {name} {surname}
               <i className="bi bi-trash" onClick={removeDirector}></i> 
            </li>


    )
}