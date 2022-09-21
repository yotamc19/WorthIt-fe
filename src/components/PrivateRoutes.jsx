import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {

    return (
        true ? <Outlet /> : <Navigate to='/' />
    )
}

export default PrivateRoutes;