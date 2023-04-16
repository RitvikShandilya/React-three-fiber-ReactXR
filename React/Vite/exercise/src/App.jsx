import { useState } from 'react';
import Clicker from "./Clicker.jsx";

export default function App() {
    
    const [hasClicker, setHasClicker] = useState(true);
    
    const toggleClicker = () => {
        setHasClicker(!hasClicker);
    }

    return <>
        <button onClick = {toggleClicker}>{hasClicker ? 'Hide' : 'Show'} Clicker</button>
        { hasClicker ? <Clicker /> : null }
        {hasClicker && 
        <>
            <Clicker color = "orange" keyName="CountA"/>
            <Clicker color = "green" keyName="CountB"/>
        </>
        }
    </>
}