
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setIsLight } from './slice'
const Navbar = () => {
    const isLight = useSelector((state) => state.isLight)
    
    const dispatch=useDispatch()
    return (
        <>
            <div >
            <p>Geekster</p>
                <Link to="/">Home</Link> <br />
                <Link to="/contact">Contact</Link> <br />
                <Link to="/service">Service</Link> <br />
            
                <button onClick={()=>{dispatch(setIsLight())}} >Toggle Theme to {isLight?"Light":"Dark"} </button>
                </div>
        </>
    )
}
export default Navbar;