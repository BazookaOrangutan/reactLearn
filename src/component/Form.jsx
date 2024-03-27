import React,{ useState, createRef } from "react";

export default function Form(props) {
    const { action } = props;
    const inputVal = createRef();
    const [val, setVal] = useState('');
    const [validName, setValidName] = useState(false);
    const [error, setError] = useState('');
    const handlerSubmit = (e) => {
        e.preventDefault();
        const [name, surname] = val.split(' ');
        if (validName === true) {
            action({ name, surname });
            setVal('');
            inputVal.current.value = '';    
        }
        else {
            setError("Введите корректные данные")
        }

    }
    const handlerChanged = (e) => {
        setValidName(isValid(e.target.value));
        setVal(e.target.value);
        setError('');
        // setVal(inputVal.current.value);

    }
    const isValid = (name) => {
        let reg = /^[a-zA-zа-яА-я0-9.-\s]+$/gi;
        
        return name.length >= 2 && reg.test(name);
    }

    return (
        <section className='section-form'>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="" id="valSet" ref={inputVal} onChange={handlerChanged} className='form-control' style={{ borderColor: validName === true ? 'green' : 'red' }} />
                <button type="submit" className='btn btn-secondary'><i className="bi bi-plus"></i></button>
            </form>
            <p>{error}</p>
        </section>

    )
}