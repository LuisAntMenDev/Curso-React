import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle";

export const MemoHook = () => {
    const [title, setTitle] = useState('Mi título');
    const [subtitle, setSubtitle] = useState('Mi subtítulo');

    const handleAPICall = useCallback(() => {
        console.log('Llamar a API - ' + subtitle);
    }, [subtitle]);

    return (
        <div className="bg-gradient flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoApp</h1>
            <MyTitle title={title} />
            <MySubtitle subtitle={subtitle} callMyAPI={handleAPICall} />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle('Titulo de prueba, ' + new Date().getTime())}>
                Cambiar título
            </button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setSubtitle('Subtitulo de prueba')}>
                Cambiar subtítulo
            </button>
        </div>
    )
}
