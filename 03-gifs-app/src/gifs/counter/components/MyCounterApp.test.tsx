import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp', () => {
    test('should render component', () => {
        render(<MyCounterApp />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain('Counter: 5');
        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    });
    test('should increment counter', () => {
        render(<MyCounterApp />);
        const h1El = screen.getByRole('heading', { level: 1 });
        const buttonEl = screen.getByRole('button', { name: '+1' });
        fireEvent.click(buttonEl);
        expect(h1El.innerHTML).toContain('Counter: 6');
    });
    test('should decrement counter', () => {
        render(<MyCounterApp />);
        const h1El = screen.getByRole('heading', { level: 1 });
        const buttonEl = screen.getByRole('button', { name: '-1' });
        fireEvent.click(buttonEl);
        expect(h1El.innerHTML).toContain('Counter: 4');
    });
})