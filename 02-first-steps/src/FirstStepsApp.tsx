import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity?: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Xbox Series X', quantity: 1 },
    { productName: 'Xbox Elite Controller', quantity: 2 },
    { productName: 'Gears of War E-Day' }
];

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {itemsInCart.map(item => (<ItemCounter key={item.productName} name={item.productName} quantity={item.quantity} />))}

            <ItemCounter name="Xbox Series X" quantity={1} />
            <ItemCounter name="Xbox Elite Controller" quantity={2} />
            <ItemCounter name="Gears of War E-Day" quantity={3} />

        </>
    )
}