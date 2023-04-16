import { useEffect, useState } from "react";

export default function Clicker({keyName, color}) {

    const [count, setCount] = useState(0);

//Calling a function on first render
    useEffect(() => {
        console.log('hello');

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
    }
    
    return <div>
        <div style = {{ color: color }}>Clicks Count: {count}</div>
        <button onClick={buttonClick}>Click me</button>
    </div>
}