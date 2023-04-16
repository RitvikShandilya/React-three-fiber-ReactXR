import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))
// for class, we use className
const toto = true;
root.render(
    <>
    <h1 className="main">Hello React</h1>
    <h1>Hello {1+1}</h1>
    <h1>Hello {Date.now()}</h1>
    <h1>Hello {myFunction}</h1>
    <h1>Hello {() => {}}</h1>
    <h1>Hello {MyArray.map(() => {})}</h1>
    <h1>{toto ? 'yes' : 'no'}</h1>
    {/* This is a comment*/}
    </>
    )