import { useEffect, useState } from "react"
import DarkModeIcon from "../../Icons/DarkModeIcon"
import './header.css'
const Header = () => {
    const [lightmode, setLightmode] = useState(false)
    const handlesetlightmod =()=>{
        setLightmode(!lightmode)
    }
    useEffect(() => {
        document.body.className = `${lightmode? 'light':''}`;
      }, [lightmode]);
    return (
        <div className='header'>

            <h5>Where in the world</h5>
            <button onClick={handlesetlightmod}>{<DarkModeIcon></DarkModeIcon>}Dark Mode</button>

        </div>
    )
}

export default Header