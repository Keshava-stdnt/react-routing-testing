import { useContext } from "react";
import { incrementContextCreation } from "../context/IncrementContext";

function Child2 () {

    let {counter, increment, decrement} = useContext(incrementContextCreation);
    
    return (
        <div className='text-center bg-warning rounded p-3'>
            <h1 className="h1">Counter 2</h1>
            <h3 className="h3">{counter}</h3>
            <button type="button" className="btn btn-primary mx-2 px-3" onClick={increment}>+</button>
            <button type="button" className='btn btn-secondary px-3' onClick={decrement}>-</button>
        </div>
    );
}

export default Child2;