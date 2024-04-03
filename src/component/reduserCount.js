const inc = (delta)=>{
    return {
        type: 'inc',
        delta
    }
}
const dis = (delta) => {
    return{
        type: 'dis',
        delta
    }
}
function reducer(state, action){
    console.log(state, action);
    switch (action.type){
        case 'inc':
            return {counter: state.counter + action.delta};
        case 'dis':
            return {counter: state.counter - action.delta};
        default:
            return {...state};
    }
}
export {inc, dis, reducer};