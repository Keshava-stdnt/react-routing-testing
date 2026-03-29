import { useContext } from 'react'
import { incrementContextCreation } from '../context/IncrementContext';

function Child1 () {
    
    // Using the exported `const` context
    let {counter, increment, decrement} = useContext(incrementContextCreation);
    return (
        <div className='text-center rounded p-3 bg-info'>
            <h1 className="h1">Counter 1</h1>
            <h3 className="h3">{counter}</h3>
            <button type="button" className="btn btn-primary mx-2 px-3" onClick={increment}>+</button>
            <button type="button" className='btn btn-secondary px-3' onClick={decrement}>-</button>
        </div>
    );
}

export default Child1;