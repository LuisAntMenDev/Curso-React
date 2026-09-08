import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

type AuthStatus = 'pending' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean;

    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>('pending');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number) => {
        console.log(userId);
        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log('User not found');
            setUser(null);
            setAuthStatus('not-authenticated');
            return false;
        }
        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString());
        return true;
    }
    const handleLogout = () => {
        console.log('logout');
        setAuthStatus('not-authenticated');
        setUser(null);
        localStorage.removeItem('userId');
    }

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            handleLogin(+storedUserId);
            return;
        }
        handleLogout();
    }, []);

    return (
        <UserContext value={{
            authStatus,
            user,
            isAuthenticated: authStatus === 'authenticated',
            login: handleLogin,
            logout: handleLogout
        }}>{children}</UserContext>
    )
}
