import type React from "react"
import { use } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router"

interface Props {
    element: React.ReactNode
}

export const PrivateRoute = ({ element }: Props) => {

    const { authStatus } = use(UserContext);

    switch (authStatus) {
        case 'pending':
            return null;
        case 'authenticated':
            return element;
        case 'not-authenticated':
        default:
            return <Navigate to="/" replace />
    }
}
