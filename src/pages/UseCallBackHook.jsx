import React, {useState,useCallback} from 'react';
import Todos from './Todos';

// The React useCallback Hook returns a memoized callback function.
// Think of memoization as caching a value so that it does not need to be recalculated.
// This allows us to isolate resource intensive functions so that they will not automatically run on every render.
// The useCallback Hook only runs when one of its dependencies update.
// This can improve performance.
// The useCallback and useMemo Hooks are similar.The main difference is that useMemo returns a memoized value and useCallback returns a memoized function

const UseCallBackHook = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = useCallback((text) => { //useCallBack provide us option to pass the whole function not just return value of the function like useMemo
        setTodos((t) => [...t, "New Todo"+text]);
    }, [todos]);

    // const addTodo = () => { //refrential inequality creates new object each time function re-renders
    //     setTodos((t) => [...t, "New Todo"]);
    // };

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}

export default UseCallBackHook;
