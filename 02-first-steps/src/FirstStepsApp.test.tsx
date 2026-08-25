import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { ItemCounter } from "./shopping-cart/ItemCounter";

const mockItemCounter = vi.fn((props: unknown) => {
    return (
        <div data-testid="ItemCounter"></div>
    )
})

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}))

describe('FirstStepApps', () => {

    afterEach(() => {
        vi.clearAllMocks();
    })
    test('Should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        //expect(container).toMatchSnapshot();
    })
    test('Should render 3 ItemCounter components', () => {
        render(<FirstStepsApp />);
        const itemCounters = screen.getAllByTestId('ItemCounter');
        expect(itemCounters.length).toBe(3);
    })

    test('Should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Xbox Series X', quantity: 1 })
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Xbox Elite Controller', quantity: 2 })
        expect(mockItemCounter).toHaveBeenCalledWith({ name: 'Gears of War E-Day' })
    })
})