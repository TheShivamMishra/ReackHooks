import React, { useRef, useEffect, useState } from 'react';


// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re - render when updated.
// It can be used to access a DOM element directly.

const UseRefHook = () => {
    const [name, setName] = useState("");

    //useRef as storing value in b/w renders or storing values that are needed once like userName,password etc!

    // const renderCount = useRef(0); //It return object with {current:0}

    // useEffect(() => {
    //    renderCount.current = renderCount.current + 1;
    // });

    // return (
    //     <>
    //     <input value={name} onChange={e => setName(e.target.value)}/>
    //     <div>My Name is {name}</div>
    //     <div>I have rendered {renderCount.current} times</div>
    //     </>
    // );

    //useRef to modifiy dom object just like we do in getElementById/querySelector in js

    const inputRef = useRef();

    function focus(){
        console.log(inputRef.current);
        inputRef.current.focus();
        // inputRef.current.value = "hello world!"
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>My Name is {name}</div>
           <button onClick={focus}>Focus</button>
        </>
    );
}

export default UseRefHook;
