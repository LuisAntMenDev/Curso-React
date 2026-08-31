import { useCounter } from '../hooks/useCounter'

export const MyCounterApp = () => {
    const { counter, handleAdd, handleReset, handleSubtract } = useCounter(5);

    return (
        <>
            <h1>Counter: {counter}</h1>
            <div>
                <button onClick={handleSubtract}>-1</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleAdd}>+1</button>
            </div>
        </>
    )
}
