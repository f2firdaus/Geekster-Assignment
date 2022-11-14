import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { contextMain } from './contexts';

const Navbar = () => {

    const { isLight, themeLight } =useContext(contextMain)
    return (
        <>
            <div >
            <p>Geekster</p>
            <Link to="/">Home</Link> <br />
                <Link to="/contact">Contact</Link> <br />
                <Link to="/service">Service</Link> <br />
            
                <button onClick={()=>themeLight()} >Toggle Theme to {isLight?"Dark":"Light"} </button>
                </div>
        </>
    )
}
export default Navbar;