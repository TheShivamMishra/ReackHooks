import React,{useState,useEffect} from 'react';

// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.

const UseStateHook = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [fullName,setFullName] = useState("");   //redundant useSate variable;
    
    // const fullName = `${firstName}${lastName}`;  //use this instead every time useState variable chages fullName will be calculated agina!


    useEffect(() => {
        setFullName(`${firstName}${lastName}`)
    }, [firstName,lastName]);

    return (
        <>
            <input value={firstName} onChange ={e => setFirstName(e.target.value)} />
            <input value={lastName} onChange={e => setlastName(e.target.value)} />
            {fullName}
        </>
    );
}

export default UseStateHook;
