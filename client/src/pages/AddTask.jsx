import React from 'react'
import Wrapper from '../assets/wrappers/AddTask'
import { toast } from 'react-toastify'
import { redirect, useNavigation, Form } from 'react-router-dom'
import customFetch from '../../utils/customFetch'

//need an action to create a new task
//need import redirect to be used with action and loaders.
//need a Form wrapper to use useNavigation hook to update states with the submit button.
//import toast to display messages.
//import customFetch to fech the data.
// useNavigation states ---> idle - submitting - loading

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);


    try {

        await customFetch.post('/tasks', data);
        toast.success('task created!');
        return redirect('./all-tasks');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }

}

const AddTask = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <Wrapper>
            <main>
                <h2>New Task</h2>
                <Form className='form' method='post'>
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type="text" name="name" id="name" className='form-input' required minLength={1} maxLength={25} />

                    <button type="submit" className='btn form-btn' disabled={isSubmitting}>{isSubmitting ? 'Creating...' : 'create'}</button>
                </Form>
            </main>
        </Wrapper>
    )
}

export default AddTask