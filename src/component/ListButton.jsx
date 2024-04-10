import React, { useContext } from "react";
import Button from "./Button";
import { Context } from "./context";

import { ascId, revAscId, deleteAll, sortByName, sortBySurname } from "./reducerDirector";

export default function ListButton() {
    // const { deleteAll, ascId, revAscId, sortByName, sortBySurname } = useContext(Context);\
    const { dispatch } = useContext(Context);

    return (
        <>
            {/* <button onClick={ascId} className='btn btn-info'><i class="bi bi-arrow-up"></i> Id</button>
            <button onClick={revAscId} className='btn btn-info'><i class="bi bi-arrow-down"></i> Id</button>
            <button onClick={deleteAll} className='btn btn-danger'>Удалить всё</button>
            <button onClick={sortByName} className='btn btn-info'><i class="bi bi-arrow-up"></i> Name</button>
            <button onClick={sortBySurname} className='btn btn-info'><i class="bi bi-arrow-up"></i> Surname</button> */}
            <Button action={() => { dispatch(ascId()) }} className={'btn btn-info'} icon={'bi bi-arrow-up'} caption={'Id'} />
            <Button action={() => { dispatch(revAscId()) }} className={'btn btn-info'} icon='bi bi-arrow-down' caption='Id' />
            <Button action={() => { dispatch(deleteAll()) }} className={'btn btn-danger'} caption='Удалить всё' />
            <Button action={() => { dispatch(sortByName()) }} className={'btn btn-info'} icon='bi bi-arrow-up' caption='Name' />
            <Button action={() => { dispatch(sortBySurname()) }} className={'btn btn-info'} icon='bi bi-arrow-up' caption='Surname' />
        </>)
}