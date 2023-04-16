import { useState } from 'react';
import Clicker from "./Clicker.jsx";

export default function App() {
    
    const [hasClicker, setHasClicker] = useState(true);
    const [count, setCount] = useState(0);

    const toggleClicker = () => {
        setHasClicker(!hasClicker);
    }

    const increment = () => {
        setCount(count + 1);
    } 

    return <>
        <div>Total count: { count }</div>
        <button onClick = {toggleClicker}>{hasClicker ? 'Hide' : 'Show'} Clicker</button>
        { hasClicker ? <Clicker /> : null }
        {hasClicker && 
        <>
            <Clicker increment = { increment } color = "orange" keyName="CountA"/>
            <Clicker increment = { increment } color = "green" keyName="CountB"/>
        </>
        }
    </>
}