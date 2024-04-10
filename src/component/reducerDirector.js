const addDirector = (newDirector, id) => {
    return {
        type: 'addDirector',
        id: id,
        newDirector: newDirector
    }
}

const removeItem = (id) => {
    return{
        type: 'removeItem',
        id: id
    }
}

const ascId = () => {
    return{
        type: 'ascId'
    }
}
const revAscId = () => {
    return{
        type: 'revAscId'
    }
}
const deleteAll = () => {
    return{
        type: 'deleteAll'
    }
}
const sortByName = () => {
    return{
        type: 'sortByName'
    }
}
const sortBySurname = () => {
    return{
        type: 'sortBySurname'
    }
}

function reducer(dirList, action) {
    switch (action.type) {
        case 'addDirector':
            return ([...dirList, { id: action.id, ...action.newDirector }]);
        case 'removeItem':
            return ([...dirList].filter((director) => director.id !== action.id));
        case 'ascId':
            return ([...dirList].sort((director1, director2) => director1.id - director2.id));
        
        case 'revAscId':
            return ([...dirList].sort((director1, director2) => director2.id - director1.id));
        case 'deleteAll':
            return ([])
        
            case 'sortByName':
            return ([...dirList].sort((a, b) => a.name.localeCompare(b.name)));
        case 'sortBySurname':
            return ([...dirList].sort((a, b) => a.surname.localeCompare(b.surname)));
        default:
            return { ...dirList }
    }
}

export {reducer, addDirector, removeItem, ascId, revAscId, deleteAll, sortByName, sortBySurname};