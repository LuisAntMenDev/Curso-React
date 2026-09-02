import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        inputRef.current?.select();
    }
    return (
        <div className="bg-gradient flex-col gap-4">
            <h1 className="text-2xl font-thin">Focus Screen</h1>
            <input ref={inputRef} type="text" className="bg-white text-black px-4 py-2 rounded-md" />
            <button onClick={handleClick} className="bg-blue-500 rounded-md px-4 py-2 cursor-pointer">Set focus</button>
        </div>
    )
}
