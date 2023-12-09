import { NavLink } from "react-router-dom"
import Wrapper from "../assets/wrappers/SmallSidebar"
import { IoMdClose } from "react-icons/io";
import { useDashboardContext } from "../pages/DashboardLayout";


const SmallSidebar = () => {

    const { showSidebar, toggleSidebar } = useDashboardContext();

    return (
        <Wrapper>

            <div className={`${!showSidebar && 'sidebar'} scale-sidebar`}>

                <div className="sidebar-container " onClick={toggleSidebar}>
                </div>
                <div className="sidebar-links-container ">
                    <div className="sidebar-links">

                        <div className="sidebar-close">

                            <button type="button" onClick={toggleSidebar}>
                                <IoMdClose />
                            </button>
                        </div>
                        <NavLink to='.' className='link' onClick={toggleSidebar}>
                            <span>new task</span>
                        </NavLink>
                        <NavLink to='all-tasks' className='link' onClick={toggleSidebar}>
                            <span>all tasks</span>
                        </NavLink>
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}

export default SmallSidebar