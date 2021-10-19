import { useState, useContext } from 'react';
import { firebaseAuth } from '../../services/firebaseConfig';
import { AuthContext } from '../../contexts'

const useAuth = () => {
    const [authMsgError, setAuthMsgError] = useState<string | null>(null);
    const { setIsAuthenticated, setUser } = useContext(AuthContext);

    const register = async (email: string, password: string, fullName: string) => {
        return await firebaseAuth.auth().createUserWithEmailAndPassword(email, password)
            .then((response: firebaseAuth.auth.UserCredential) => {
                setUser(response.user);
                response?.user?.updateProfile({ displayName: fullName });
            })
            .catch(e => {
                switch (e.code) {
                    case "auth/invalid-email": setAuthMsgError('Formato de email incorrecto')
                        break
                    case "auth/weak-password": setAuthMsgError('La contraseña debe tener 6 caracteres o más')
                        break
                }
            })
    }
}
export { useAuth }