import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Error';
import notFound from '../assets/images/notFound.svg'
const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <Wrapper>
            <div>
                <img src={notFound} alt="not found" />
                <h3>Ohh!! page not found</h3>
                <p>We can't seem to find the page you're looking for</p>
                <Link to='/'>back home</Link>

            </div>
        </Wrapper>

    )
}

export default Error