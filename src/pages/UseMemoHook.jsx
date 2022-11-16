import React, {useMemo, useState,useEffect} from 'react';

// The React useMemo Hook returns a memoized value.
// Think of memoization as caching a value so that it does not need to be recalculated.
// The useMemo Hook only runs when one of its dependencies update.
// This can improve performance.

const UseMemoHook = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = slowFunction(number);
    // const doubleNumber = useMemo(()=> {return slowFunction(number)},[number]); //now this will call slowFunction when number changes otherwise don't;

    const themeStyle={    //refrential inequality every time function render this creates new object with diff add in memory 
        backgroundColor: dark?'black':'white',
        color: dark?'white':'black'
    }

    //using useMemo this will actually store the obj add 
    // const themeStyle = useMemo(() =>  
    // {
    //     return {
    //         backgroundColor: dark ? 'black' : 'white',
    //         color: dark ? 'white' : 'black'
    //     }
    // }, [dark])

    //used to check the refrential equality!!!
    useEffect(() => {
        console.log("theme changed!")
    }, [themeStyle]);

    return (
        // use React.fragments(<></>) where you return just <div></div> as it don't add a node in DOM
        <>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
        <button onClick={() => setDark(prevColor => !prevColor)}>Change Theme</button>
        <div style={themeStyle}>{doubleNumber}</div>
        </>
    );
}

function slowFunction(num){
    console.log("calling slow function...")
    for(let i=0;i<=1000000000;i++){}
    return num*2;
}
export default UseMemoHook;
