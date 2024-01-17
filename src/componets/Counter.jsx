import React from 'react';
import Button from './UI/Button';
import { store } from './store';
import { useSelector } from 'react-redux';

const Counter = () => {
const {result}= useSelector((state)=>state)
    const addNumber=()=>{
        store.dispatch({type:'ADD'})
    }
    const subtract=()=>{
        store.dispatch({type:'SUBTRACTION'})
    }

    const multipul=()=>{store.dispatch({type:'MULTIPLY'})
    }
    const division=()=>{store.dispatch({type:'DIVISION'})
    }
    return (
        <div>
            <div>{result}</div>
            <Button variant='plu25s' onClick={addNumber}>+25</Button>
            <Button variant='plu50s' onClick={subtract}>+50</Button>
            <Button variant='minus' onClick={multipul}>-</Button>
            <Button variant='plus' onClick={division}>+</Button>
        </div>
    );
};

export default Counter;