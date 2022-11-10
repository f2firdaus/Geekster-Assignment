import { useState } from "react";

const Main = () => {

    const [color, setColor] = useState(false);

    const colorChange = () => {
        setColor(color=>!color)
    }

    return (
        <>
            <div style={{backgroundColor:color?'black':'',height:'96vh', padding:'5px',overflow:'hidden' }}>
            <div className="header">
                    <h1 style={{ color: color ? 'white' : '' }}>Overreacted</h1>
                <button onClick={colorChange}>Toggle</button>
            </div>
            <div className="h1">
                <h1 className="h1-1">The Wet Codebase</h1>
                <p style={{ color: color ? 'white' : '' }}>Sunday -4th 2022 11 min read</p>
                <span style={{ color: color ? 'white' : '' }}>Come waste your time with me</span>
            </div>
            <div className="h1">
                <h1 className="h1-1" >goodby, Clean Code</h1>
                <p style={{ color: color ? 'white' : '' }}>Sunday -4th 2022 11 min read</p>
                <span style={{ color: color ? 'white' : '' }}>Come waste your time with me</span>
            </div>
            <div className="h1">
                <h1 className="h1-1">My decade In review</h1>
                <p style={{ color: color ? 'white' : '' }}>Sunday -4th 2022 11 min read</p>
                <span style={{ color: color ? 'white' : '' }}>Come waste your time with me</span>
            </div>
            <div className="h1">
                <h1 className="h1-1">What Are The React team principles</h1>
                <p style={{ color: color ? 'white' : '' }}>Sunday -4th 2022 11 min read</p>
                <span style={{ color: color ? 'white' : '' }}>Come waste your time with me</span>
                </div>
                </div>
        </>
    )
}
export default Main;