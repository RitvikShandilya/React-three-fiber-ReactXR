import { useState } from 'react';
import Clicker from "./Clicker.jsx";

export default function App({clickersCount}) {
    
    const [hasClicker, setHasClicker] = useState(true);
    const [count, setCount] = useState(0);

    const toggleClicker = () => {
        setHasClicker(!hasClicker);
    }

    const increment = () => {
        setCount(count + 1);
    } 

    const tempArray = Array(clickersCount);

    return <>
        <div>Total count: { count }</div>
        <button onClick = {toggleClicker}>{hasClicker ? 'Hide' : 'Show'} Clicker</button>
        { hasClicker && <>
        { [...Array(clickersCount)].map(() => {
            return <Clicker increment = { increment } color = "orange" keyName="CountA"/>
        }) }
        </>}
        {/*{ hasClicker ? <Clicker /> : null }
        {hasClicker && 
        <>
            <Clicker increment = { increment } color = "orange" keyName="CountA"/>
            <Clicker increment = { increment } color = "green" keyName="CountB"/>
        </>
        }*/}
    </>
}