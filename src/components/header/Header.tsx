import DarkModeIcon from "../../Icons/DarkModeIcon"
import './header.css'
const Header = () => {
    return (
        <div className='header'>

            <h5>Where in the world</h5>
            <button>{<DarkModeIcon></DarkModeIcon>}Dark Mode</button>

        </div>
    )
}

export default Header