import React, {useContext} from 'react';
import { ThemeContext } from './UseContextHook';  //importing that context here

//this is the functional version of useContext hook call version have much verbage code!

const BoxComponent = () => {

    const darkTheme = useContext(ThemeContext);  //this will give access to the themeContext to the whole component;

    const themeStyles={
        backgroundColor:darkTheme?'#333':'#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding:'2rem',margin:'2rem'
    }

    return (
        <div style={themeStyles}>
            I know it's complex :-)
        </div>
    );
}

export default BoxComponent;
