import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {
    test('should render SearchBar correctly', () => {
        const { container } = render(<SearchBar onQuery={() => { }} />);
        expect(container).toMatchSnapshot();
    });
    test('should call onQuery with correct value afrer 700ms', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);
        const inputEl = screen.getByRole('textbox');
        fireEvent.change(inputEl, { target: { value: 'test' } });
        await waitFor(() => {
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });
    test('should have only one call with value', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);
        const inputEl = screen.getByRole('textbox');
        fireEvent.change(inputEl, { target: { value: 't' } });
        fireEvent.change(inputEl, { target: { value: 'te' } });
        fireEvent.change(inputEl, { target: { value: 'tes' } });
        fireEvent.change(inputEl, { target: { value: 'test' } });
        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });
    test('should call onQuery on button click', () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);
        const inputEl = screen.getByRole('textbox');
        const buttonEl = screen.getByRole('button');
        fireEvent.change(inputEl, { target: { value: 'test' } });
        fireEvent.click(buttonEl);
        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test');
    })
    test('input should have correct placeholder', () => {
        const placeholder = "Prueba de placeholder";
        render(<SearchBar onQuery={() => { }} placeholder={placeholder} />);
        expect(screen.getByPlaceholderText(placeholder)).toBeDefined();
    })
})