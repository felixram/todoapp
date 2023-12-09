import Wrapper from "../assets/wrappers/BigSidebar"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <Wrapper>
            <section>

                <NavLink to='.' >
                    <span>new task</span>
                </NavLink>
                <NavLink to='all-tasks'>
                    <span>all tasks</span>
                </NavLink>


            </section>
        </Wrapper>
    )
}

export default Sidebar