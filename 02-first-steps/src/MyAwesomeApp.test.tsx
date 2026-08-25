import { describe, expect, test } from "vitest";
import { render } from '@testing-library/react';
import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
    test('Should render first and last name', () => {
        const { container } = render(<MyAwesomeApp />);
        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain('Luis');
    });

    test('Should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();
    });
});