import React from 'react'
import Wrapper from '../assets/wrappers/TaskRow'
import { MdEdit } from "react-icons/md";
import { FaCheck, FaTrash } from "react-icons/fa";
import { Link, Form } from 'react-router-dom'



const TaskRow = ({ name, status, _id }) => {

    const isCompleted = status === 'completed';

    return (
        <Wrapper>
            <div className={`task-row ${isCompleted ? 'task-completed' : null}`}>
                <div className={`${isCompleted ? 'cross-line' : null}`}></div>
                <p >{name}</p>
                <p>{status}</p>

                <div className="task-buttons" >
                    <button type="button" >
                        <Link to={`${isCompleted ? '#' : `../edit-task/${_id}`}`} className={`${isCompleted ? 'task-completed' : 'navigation-button'}`}>
                            <MdEdit />
                        </Link>
                    </button>
                    <Form method='post' action={`../complete-task/${_id}`}>

                        <button type="submit" className={isCompleted ? 'task-completed' : null}><FaCheck /></button>
                    </Form>
                    <Form method='post' action={`../delete-task/${_id}`}>

                        <button type="submit" className={isCompleted ? 'task-completed' : null} disabled={isCompleted}>
                            <FaTrash />
                        </button>
                    </Form>
                </div>
            </div >
        </Wrapper >
    )
}

export default TaskRow