import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))
// for class, we use className
const toto = true;
root.render(
    <>
    <h1 style = {{ color: 'coral', backgroundColor: 'purple' }}>Hello React</h1>
    {/* This is a comment*/}
    </>
    )