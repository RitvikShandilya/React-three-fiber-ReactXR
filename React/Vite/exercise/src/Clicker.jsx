import { useRef, useEffect, useState } from "react";

export default function Clicker({increment, keyName, color}) {

    const [count, setCount] = useState(0);
    const buttonRef = useRef();
//Calling a function on first render
    useEffect(() => {
        console.log('hello');
        console.log(buttonRef.current);;
        return () => {
            console.log('component destroyed');
        }
    },
    []);

//Below will execute only when count changes
useEffect(() => {
    console.log('hello count changed');
}, [count]);

    const buttonClick = () => {
        setCount(count + 1);
        increment();
    }
    
    return <div>
        <div style = {{ color: color }}>Clicks Count: {count}</div>
        <button ref = { buttonRef } onClick={buttonClick}>Click me</button>
    </div>
}