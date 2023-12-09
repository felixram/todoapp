import Wrapper from "../assets/wrappers/DashboardLayout"
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import BigSidebar from "../components/BigSidebar"
import { createContext, useContext } from 'react'
import SmallSidebar from "../components/SmallSidebar"
import { useState } from "react"
import customFetch from "../../utils/customFetch.js"
import { toast } from 'react-toastify'

export const loader = async () => {
    try {
        const { data } = await customFetch.get('/users/current-user');

        return data;
    } catch (error) {
        return redirect('/');
    }
}
const DashboardContext = createContext();
const DashboardLayout = () => {
    const navigate = useNavigate();
    const [showSidebar, setShowSidebar] = useState(false);

    const { user } = useLoaderData();


    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    const logoutUser = async () => {
        navigate('/');
        await customFetch.get('/auth/logout');
        toast.success('Logging out...');
    }

    return (
        <DashboardContext.Provider
            value={{ user, showSidebar, toggleSidebar, logoutUser }}
        >

            <Wrapper>
                <SmallSidebar />
                <BigSidebar />

                <main className="dashboard">
                    <Navbar />
                    <div className="dashboard-page">

                        <Outlet context={user} />
                    </div>
                    <Footer />
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    )
}
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;