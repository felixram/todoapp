import React from 'react'
import Wrapper from '../assets/wrappers/AllTasks'
import TaskRow from '../components/TaskRow'
import { useLoaderData } from 'react-router-dom'
import customFetch from '../../utils/customFetch'


export const loader = async ({ request }) => {
    try {
        const { data } = await customFetch.get('/tasks');

        return data;
    } catch (error) {
        return error;
    }
}

const AllTasks = () => {
    const { tasks } = useLoaderData();
    return (
        <Wrapper>
            <h2>My Tasks</h2>
            {tasks.length < 1 ? 'No tasks to show' :
                tasks.map(task => {
                    return <TaskRow {...task} key={task._id} />
                })

            }


        </Wrapper>
    )
}

export default AllTasks