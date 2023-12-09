import Wrapper from "../assets/wrappers/Navbar"
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg';
import { IoMenuOutline } from "react-icons/io5";

import { useDashboardContext } from "../pages/DashboardLayout";


const Navbar = () => {
    const { user: { name }, toggleSidebar, logoutUser } = useDashboardContext();

    return (
        <Wrapper>
            <Link to='/tasks' className="logo">
                <img src={logo} alt="logo" />
            </Link>

            <p>
                {name && `welcome back ${name}!`}
            </p>

            <div className="buttons-container">

                <Link to='/' className="link" onClick={logoutUser}>{name && 'Log out'}</Link>
                <button type="button" onClick={toggleSidebar} className="menu-button"><IoMenuOutline />
                </button>
            </div>

        </Wrapper>
    )
}

export default Navbar