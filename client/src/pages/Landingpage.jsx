import Wrapper from '../assets/wrappers/Landing'
import landingImg from '../assets/images/todoImg.svg'
import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import customFetch from '../../utils/customFetch';
import { toast } from 'react-toastify'


export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post('/auth/login', data);
        toast.success('Login successful!');
        return redirect('/tasks');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
}

const Landingpage = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <Wrapper>

            <h1>ToDo App</h1>
            <Form className='form' method='post'>
                <h4>Log In</h4>
                <label htmlFor='email' className="form-label">email</label>
                <input type="text" className='form-input' name='email' id='email' placeholder='john123' defaultValue='john@gmail.com' />

                <label htmlFor='password' className="form-label" >Password</label>
                <input className='form-input' type="password" name='password' id='password' defaultValue='secret123' />
                <button className='btn form-btn' disabled={isSubmitting} >{isSubmitting ? 'loggin in...' : 'log in'}</button>
                <p>Not a member yet?</p>
                <Link to='/register' className='register-link'>Register</Link>
            </Form>
            <div className="img-container">
                <img src={landingImg} alt="landing page Image" />
            </div>

        </Wrapper>
    )
}

export default Landingpage