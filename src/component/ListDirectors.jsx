import { useState, createRef, useEffect } from 'react';
import Director from './Director';
import Form from './Form';
import NavAction from './NavAction';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './ListDirectors.css';

import { Context } from './context';

function ListDirectors() {
    const [dirList, setDirList] = useState(
        JSON.parse(localStorage.getItem('directors')) || []
    );
    useEffect(() => {
        localStorage.setItem('directors', JSON.stringify(dirList));
    }, [dirList]);
    const addDirector = (newDirector) => {
        let max_id = 0
        dirList.forEach(item => {
            max_id = Math.max(max_id, item.id)
        })
        setDirList([...dirList, { id: max_id + 1, ...newDirector }]);
    }
    const removeItem = (id) => {
        setDirList(dirList.filter((director) => director.id !== id));
        // setDirList((el) => {el.id = [...dirList].indexOf(el)+1})
    }
    const ascId = () => {
        setDirList([...dirList].sort((director1, director2) => director1.id - director2.id))
        console.log(dirList);
    }
    const revAscId = () => {
        setDirList([...dirList].sort((director1, director2) => director2.id - director1.id))
        console.log(dirList);
    }
    const deleteAll = () => {
        setDirList([])
    }
    const sortByName = () => {
        setDirList([...dirList].sort((a, b) => a.name.localeCompare(b.name)));
    }
    const sortBySurname = () => {
        setDirList([...dirList].sort((a, b) => a.surname.localeCompare(b.surname)));
    }
    return (
        <Context.Provider value={{
            deleteAll, ascId, revAscId, sortByName, sortBySurname
        }}>
        <div class='container-fluid'>
            <NavAction/>
            <Form action={addDirector}></Form>
            {dirList.map((director) => {
                return (<Director removeDirector={() => removeItem(director.id)} key={director.id} {...director} />)
            })}

        </div>
        </Context.Provider>
    )
}

export default ListDirectors;