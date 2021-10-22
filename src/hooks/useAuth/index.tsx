import { useState, useContext } from 'react';
import { firebaseAuth } from '../../services/firebaseConfig';
import { AuthContext } from '../../contexts'

const useAuth = () => {
    const [authMsgError, setAuthMsgError] = useState<string | null>(null);
    const { setIsAuthenticated, setUser } = useContext(AuthContext);

    const login = async (email: string, password: string) => {
        return await firebaseAuth.auth().signInWithEmailAndPassword(email, password)
            .then((response: firebaseAuth.auth.UserCredential) => {
                setUser(response.user)
                setIsAuthenticated(true)
                if (response.user) localStorage.setItem('userToken', response.user.refreshToken)
            }).catch(e => {
                switch (e.code) {
                    case "auth/invalid-email": setAuthMsgError('Wrong email format')
                        break
                    case "auth/weak-password": setAuthMsgError('Password must be 6 characters or more')
                        break
                    case "auth/wrong-password": setAuthMsgError('The password is incorrect or the user is not registered')
                        break
                }
            })
    }

    const register = async (fullName: string, email: string, password: string) => {
        return await firebaseAuth.auth().createUserWithEmailAndPassword(email, password)
            .then((response: firebaseAuth.auth.UserCredential) => {
                setUser(response.user);
                response?.user?.updateProfile({ displayName: fullName });
            })
            .catch(e => {
                switch (e.code) {
                    case "auth/invalid-email": setAuthMsgError('Wrong email format')
                        break
                    case "auth/weak-password": setAuthMsgError('Password must be 6 characters or more')
                        break
                }
            })
    }

    const logout = () => {
        firebaseAuth.auth().signOut()
            .then(() => {
                alert('You have successfully logged out')
                localStorage.removeItem('userToken');
                setIsAuthenticated(false);
            }).catch((error) => {
                console.log(error)
            })
    }

    return { login, register, logout, authMsgError }
}

export { useAuth }