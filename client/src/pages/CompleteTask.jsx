import customFetch from "../../utils/customFetch"
import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify';

export const action = async ({ params }) => {

    try {
        const { data: { task } } = await customFetch.get(`/tasks/${params.id}`);

        const { status } = task;

        if (status === 'completed') {

            await customFetch.patch(`/tasks/${params.id}`, { ...task, "status": "pending" });
        } else {

            await customFetch.patch(`/tasks/${params.id}`, { ...task, "status": "completed" });
            toast.success('task completed!');
        }
    } catch (error) {
        toast.error(error?.response?.data?.msg);
    }
    return redirect('/tasks/all-tasks');
}