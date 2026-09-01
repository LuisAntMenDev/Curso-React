import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader', () => {
    test('should render the title correctly', () => {
        const testTitle = "Título de prueba"
        render(<CustomHeader title={testTitle} />);
        const titleElement = screen.getByText(testTitle);
        expect(titleElement.innerHTML).toBe(testTitle);
    });
    test('should render the description when provided', () => {
        const testTitle = 'Titulo de prueba';
        const testDescription = 'Descripcion de prueba';
        render(<CustomHeader title={testTitle} description={testDescription} />);
        const textElement = screen.getByText(testDescription);
        expect(textElement.innerHTML).toBe(testDescription);
    });
    test('should not render description when not provided', () => {
        const testTitle = 'Titulo de prueba';
        const { container } = render(<CustomHeader title={testTitle} />);
        const divElement = container.querySelector('.content-center')
        const pElement = divElement?.querySelector('p');
        expect(pElement).toBeNull();
    })
});