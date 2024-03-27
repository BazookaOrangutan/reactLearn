import React, { useContext } from "react";
import Button from "./Button";
import { Context } from "./context";

export default function ListButton() {
    const { deleteAll, ascId, revAscId, sortByName, sortBySurname } = useContext(Context);
    return (
        <>
            <button onClick={ascId} className='btn btn-info'><i class="bi bi-arrow-up"></i> Id</button>
            <button onClick={revAscId} className='btn btn-info'><i class="bi bi-arrow-down"></i> Id</button>
            <button onClick={deleteAll} className='btn btn-danger'>Удалить всё</button>
            <button onClick={sortByName} className='btn btn-info'><i class="bi bi-arrow-up"></i> Name</button>
            <button onClick={sortBySurname} className='btn btn-info'><i class="bi bi-arrow-up"></i> Surname</button>
            {/* <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button> */}
        </>)
}