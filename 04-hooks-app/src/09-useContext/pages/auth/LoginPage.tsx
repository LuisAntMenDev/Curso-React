import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type React from "react"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {

    const { login } = useContext(UserContext);
    const [userId, setUserId] = useState('');
    const navigation = useNavigate();

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = login(+userId);
        if (!result) {
            toast.error('Usuario no encontrado');
            return;
        }
        navigation('/profile');
    }
    return (
        <div className='flex flex-col items-center min-h-screen'>
            <h1 className="text-4xl font-bold">Iniciar sesión</h1>
            <hr />
            <form className="flex flex-col my-10 gap-2" onSubmit={handleSubmit}>
                <Input
                    value={userId}
                    type="number"
                    placeholder="ID del usuario"
                    onChange={e => setUserId(e.target.value)}
                />
                <Button type="submit">Login</Button>
            </form>
            <Link to="/"><Button variant="ghost">Regresar</Button></Link>
        </div>
    )
}
