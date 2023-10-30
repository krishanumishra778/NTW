
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.user);
    if (!isAuthenticated) {
        return <Navigate to='/login' />;
    }
    return <>{children}</>;

};

export default ProtectedRoute;
