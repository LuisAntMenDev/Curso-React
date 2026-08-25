import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test('Should render with default values', () => {
        const componentTestName = 'Test item';
        render(<ItemCounter name={componentTestName} />);
        expect(screen.getByText(componentTestName)).toBeDefined();
    })
    test('Should render with custom quantity', () => {
        const componentTestName = 'Test item';
        const componentTestQuantity = 10;
        render(<ItemCounter name={componentTestName} quantity={componentTestQuantity} />);
        expect(screen.getByText(componentTestQuantity)).toBeDefined();
    })
    test('Should increment when +1 button is pressed', () => {
        render(<ItemCounter name="Test item" />);
        const [addButton] = screen.getAllByRole('button');
        fireEvent.click(addButton);
        expect(screen.getByText('2')).toBeDefined();
    })
    test('Should decrease when -1 button is pressed', () => {
        const quantity = 5;
        render(<ItemCounter name="Test item" quantity={quantity} />);
        const [, subtractButton] = screen.getAllByRole('button');
        fireEvent.click(subtractButton);
        expect(screen.getByText('4')).toBeDefined();
    })
    test('Should not decrease when -1 button is pressed and quantity is 1', () => {
        render(<ItemCounter name="Test item" />);
        const [, subtractButton] = screen.getAllByRole('button');
        fireEvent.click(subtractButton);
        expect(screen.getByText('1')).toBeDefined();
    })
    test('Should render red color with quantity 1', () => {
        const componentTestName = 'Test item';
        const componentTestQuantity = 1;
        render(<ItemCounter name={componentTestName} quantity={componentTestQuantity} />);
        const itemText = screen.getByText(componentTestName);
        expect(itemText.style.color).toBe('red');
    })
    test('Should render black color with quantity greater than 1', () => {
        const componentTestName = 'Test item';
        const componentTestQuantity = 2;
        render(<ItemCounter name={componentTestName} quantity={componentTestQuantity} />);
        const itemText = screen.getByText(componentTestName);
        expect(itemText.style.color).toBe('black');
    })
})