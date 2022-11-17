import React,{useState,useMemo,useEffect} from 'react';

const UseEffectHook = () => {
    
    const [name, setName] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const person = "hi" + name;  //this var will recreate itself even when darkMode var changes i.e. refrential equality!
     
    // const person = useMemo(()=> {  //using useMemo this will return the new value only when name changes i.e. depencie.
    //     return "hi" + name;
    // },[name])

    useEffect(()=>{
        console.log(person);
    },[person]);

    return (
        <div>
            Age: {" "}
            <input value={name} onChange={e=>setName(e.target.value)}/>
            <br/>
            DarKMode: {" "}
            <input value={darkMode} type="checkbox" onChange={e => setDarkMode(e.target.checked)} />
        </div>
    );
}

export default UseEffectHook;
