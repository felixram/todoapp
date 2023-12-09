import Wrapper from "../assets/wrappers/Register"
import { Link, Form, redirect, useNavigation } from 'react-router-dom'
import customFetch from '../../utils/customFetch.js'
import { toast } from 'react-toastify'


export const action = async ({ request }) => {

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.post('/auth/register', data);
        toast.success('Registration successful!');
        return redirect('/');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }

}

const Register = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting'

    return (
        <Wrapper>
            <main>
                <Form className="form" method='post' >
                    <h4>Register</h4>
                    <label htmlFor="name" className="form-label">name</label>
                    <input type="text" name="name" id="name" className="form-input" />
                    <label htmlFor="email" className="form-label">email</label>
                    <input type="text" name="email" id="email" className="form-input" />
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" name="password" id="password" className="form-input" />
                    <button type="submit" className="btn form-btn" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'submit'}</button>
                    <p>already a member?</p>
                    <Link to='/' className='login-link'>login</Link>
                </Form>
            </main>
        </Wrapper>
    )
}

export default Register