import {useReducer} from 'react'

const initialState = 0;


const reducer = (state,action) =>{
    switch (action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        case 'MULTI':
            return state*5;
        case 'DIVI':
            return state/5;
        default:
          return state;
}
}



const UseReducer = () =>{

const [state,dispatch] = useReducer(reducer,initialState)



const onIncrease = () =>{
    dispatch({type:'INCREMENT'})
}

const onDecrease = () =>{
    dispatch({type:"DECREMENT"})
}

const onMulti = () =>{
  dispatch({type:"MULTI"})
}

const onDivi = () =>{
    dispatch({type:"DIVI"})
}
    return(
        <div>
            <h1>{state}</h1>
            <button type="button" onClick={onIncrease}>increase</button>
            <button type="button" onClick={onDecrease}>decrease</button>
            <h1>{state}</h1>
            <button type="button" onClick={onMulti}>multiple</button>
            <button type="button" onClick={onDivi}>Divide</button>
        </div>
    )
}

export default UseReducer