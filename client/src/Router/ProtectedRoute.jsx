import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const token = document.cookie
        .split('; ')
        .find(cookie => cookie.startsWith('token='))
        ?.split('=')[1];

    // Alternatively, you can use a library like js-cookie for better API
    // const token = Cookies.get('token');

    // console.log(token);
   
    return !token ? <Navigate to='/login' /> : <>{children}</>;
};

export default ProtectedRoute;
