import React,{useState} from 'react';
import BoxComponent from './BoxComponent';

// React Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily
// than with useState alone.

export const ThemeContext = React.createContext();  //exporting ThemeContext so that it can be used in rest of the applications

const UseContextHook = () => {

    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme(){
        setDarkTheme(prevState=>!prevState);
    }

    return (
        <>
        {/* wrap all of the code inside provider to give access to value  prop*/}
        <ThemeContext.Provider value={darkTheme}>  
            <button onClick={toggleTheme}>Toggle Theme</button>
                {/* we don't need to pass someting like <BoxCompoenet darkTheme={darkTheme} /> */}
            <BoxComponent/>  
        </ThemeContext.Provider>
        </>
    );
}

export default UseContextHook;
