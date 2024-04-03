import { useState, createRef, useEffect, useReducer } from 'react';
import Director from './Director';
import Form from './Form';
import NavAction from './NavAction';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './ListDirectors.css';

import { Context } from './context';

function ListDirectors() {
    // const [dirList, setDirList] = useState(
    //     JSON.parse(localStorage.getItem('directors')) || []
    // );
    const [dirList, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('directors')) || [] );
    console.log(dirList);


    useEffect(() => {
        localStorage.setItem('directors', JSON.stringify(dirList));
    }, [dirList]);

    function reducer(dirList, action) {
        switch (action.type){
            case 'addDirector':
                return([...dirList, {id: action.id, ...action.newDirector}]);
            case 'removeItem':
                return([...dirList].filter((director) => director.id !== action.id));
            default:
                return {...dirList}
        }
    }

    const addDirector = (newDirector) => {
        let max_id = 0
        dirList.forEach(item => {
            max_id = Math.max(max_id, item.id)
        })
        // setDirList([...dirList, { id: max_id + 1, ...newDirector }]);
        dispatch({
            type: 'addDirector',
            id: max_id + 1,
            newDirector: newDirector
        })
    }



    const removeItem = (id) => {
        // setDirList(dirList.filter((director) => director.id !== id));
        dispatch({
            type: 'removeItem',
            id: id
        })
    }
    const ascId = () => {
        // setDirList([...dirList].sort((director1, director2) => director1.id - director2.id))

        console.log(dirList);
    }
    const revAscId = () => {
        // setDirList([...dirList].sort((director1, director2) => director2.id - director1.id))
        console.log(dirList);
    }
    const deleteAll = () => {
        // setDirList([])
    }
    const sortByName = () => {
        // setDirList([...dirList].sort((a, b) => a.name.localeCompare(b.name)));
    }
    const sortBySurname = () => {
        // setDirList([...dirList].sort((a, b) => a.surname.localeCompare(b.surname)));
    }
    return (
        <Context.Provider value={{
            deleteAll, ascId, revAscId, sortByName, sortBySurname
        }}>
            <div class='container-fluid'>
                <NavAction />
                <Form action={addDirector}></Form>

                {console.log(dirList)}
                {dirList.map((director) => {
                    return (<Director removeDirector={() => removeItem(director.id)} key={director.id} {...director} />)
                })}

            </div>
        </Context.Provider>
    )
}

export default ListDirectors;