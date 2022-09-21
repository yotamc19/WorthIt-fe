import { Navigate, Outlet } from 'react-router-dom';
import { useBigContext } from '../contexts/BigContexts';

const AdminPrivateRoutes = () => {
    const { loggedUser } = useBigContext();

    return (
        loggedUser.isAdmin ? <Outlet /> : <Navigate to='/' />
    )
}

export default AdminPrivateRoutes;