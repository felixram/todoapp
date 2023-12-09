import customFetch from "../../utils/customFetch";
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'


export const action = async ({ params }) => {
    console.log('deleting!!');
    try {
        await customFetch.delete(`/tasks/${params.id}`);
        toast.success('Task deleted!');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
    }
    return redirect('/tasks/all-tasks');
}

