import { useState, createRef, useEffect, useReducer } from 'react';
import Director from './Director';
import Form from './Form';
import NavAction from './NavAction';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './ListDirectors.css';

import {reducer, addDirector, removeItem} from './reducerDirector';

import { Context } from './context';

function ListDirectors() {
    // const [dirList, setDirList] = useState(
    //     JSON.parse(localStorage.getItem('directors')) || []
    // );
    const [dirList, dispatch] = useReducer(reducer, 
        JSON.parse(localStorage.getItem('directors')) || []);
    // console.log(dirList);


    useEffect(() => {
        localStorage.setItem('directors', JSON.stringify(dirList));
        console.log('dirList', dirList);
    }, [dirList]);

    
    return (
        <Context.Provider value={{
            dispatch
            // deleteAll, ascId, revAscId, sortByName, sortBySurname
        }}>
            <div className='container-fluid'>
                <NavAction />
                <Form action={(newDirector) => {
                    dispatch(addDirector(newDirector, dirList.length > 0 && dirList.sort((a, b) => a.id - b.id) ? dirList[dirList.length - 1].id + 1 : 1));              
                }
                }></Form>

                {console.log('dirList> ',dirList)}
                {dirList.map((director) => {
                    return (<Director removeDirector={() => {
                        dispatch(removeItem(director.id))
                    }} key={director.id} {...director} />)
                })}

            </div>
        </Context.Provider>
    )
}

export default ListDirectors;