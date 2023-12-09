import customFetch from "../../utils/customFetch";
import Wrapper from "../assets/wrappers/EditTask"
import { toast } from 'react-toastify'
import { useLoaderData, Form, useNavigate, redirect, useNavigation } from 'react-router-dom';

export const loader = async ({ params }) => {
    try {
        const { data } = await customFetch.get(`/tasks/${params.id}`);
        return data;
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
}
export const action = async ({ params, request }) => {
    //get form data
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.patch(`tasks/${params.id}`, data);
        toast.success('task updated successfully!');
        return redirect('/tasks/all-tasks');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }

}

const EditTask = () => {

    const { task } = useLoaderData();
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <Wrapper>
            <h2>Edit</h2>
            <Form className="form" method="post">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" id="name" className="form-input" defaultValue={task.name} required minLength={1} maxLength={25} />
                <div className="buttons-container">
                    <button className="btn form-btn" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Updating...' : 'Update'}</button>
                    <button className="btn form-btn danger-btn" type="button" onClick={() => navigate(-1)}>cancel</button>
                </div>

            </Form>
        </Wrapper>
    )
}

export default EditTask