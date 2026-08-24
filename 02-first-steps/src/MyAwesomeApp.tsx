import type { CSSProperties } from "react";

const firstName = 'Luis';
const lastName = 'Mendoza';
const favoriteGames = ['COD', 'Hades', 'Chess'];
const isActive = true;
const address = {
    zipCode: 12345,
    country: 'Mexico'
}
const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: isActive ? 10 : 20,
    padding: 10,
    marginTop: 30
}

export function MyAwesomeApp() {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>
            <p>{isActive ? 'Activo' : 'No activo'}</p>
            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    )
}