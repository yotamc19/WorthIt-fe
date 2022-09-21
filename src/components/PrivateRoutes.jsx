import { Navigate, Outlet } from 'react-router-dom';
import { useBigContext } from '../contexts/BigContexts';

const PrivateRoutes = () => {
    const { isLoggedIn } = useBigContext();

    return (
        isLoggedIn ? <Outlet /> : <Navigate to='/' />
    )
}

export default PrivateRoutes;