import { useState, createRef, useEffect } from 'react';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './Director.css';

let directors = [
    {
        id: 1,
        name: 'Jeka',
        surname: 'Sheremet'
    },
    {
        id: 2,
        name: 'Jekich',
        surname: 'Dubrovsky'
    },
    {
        id: 3,
        name: 'Rob',
        surname: 'Bobbins'
    }
]

function Form(props) {
    const { action } = props;
    const inputVal = createRef();
    const [val, setVal] = useState('');
    const handlerSubmit = (e) => {
        e.preventDefault();
        const [name, surname] = val.split(' ');
        action({ name, surname });
        setVal('');
        inputVal.current.value = '';
    }
    const handlerChanged = (e) => {
        setVal(inputVal.current.value);
    }
    return (
        <section className='section-form'>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="" id="valSet" ref={inputVal} onChange={handlerChanged} className='form-control' />
                <button type="submit" className='btn btn-secondary'><i class="bi bi-plus"></i></button>
            </form>
            <p>{val}</p>
        </section>

    )
}

function Director(props) {
    let { id, name, surname, removeDirector } = props;
    return (
        <li className="director" onDoubleClick={removeDirector}>
            {id}. {name} {surname}
        </li>

    )
}

function ListDirectors() {
    const [dirList, setDirList] = useState(
        JSON.parse(localStorage.getItem('directors'))||[    ]
        );
    useEffect(() => {
        console.log('UseEffect');
        console.log(dirList.length);
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
        <div class='container-fluid'>
            <section className='navButtons'>
                <button onClick={ascId} className='btn btn-info'><i class="bi bi-arrow-up"></i> Id</button>
                <button onClick={revAscId} className='btn btn-info'><i class="bi bi-arrow-down"></i> Id</button>
                <button onClick={deleteAll} className='btn btn-danger'>Удалить всё</button>
                <button onClick={sortByName} className='btn btn-info'><i class="bi bi-arrow-up"></i> Name</button>
                <button onClick={sortBySurname} className='btn btn-info'><i class="bi bi-arrow-up"></i> Surname</button>
            </section>
            <Form action={addDirector}></Form>
            {dirList.map((director) => {
                return (<Director removeDirector={() => removeItem(director.id)} key={director.id} {...director} />)
            })}

        </div>
    )
}

export default ListDirectors;