import { useContext } from 'react';
import { Public, Private } from '..'
import { AuthContext } from '../../contexts/AuthProvider';


const AuthRoute = () => {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <>
            {isAuthenticated ? <Private /> : <Public />}
        </>
    );
}

export { AuthRoute };