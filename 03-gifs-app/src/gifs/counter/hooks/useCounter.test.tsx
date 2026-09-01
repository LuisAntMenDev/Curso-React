import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => {
    test('should initialize with default value', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(0);
    });
    test('should initialize with value 20', () => {
        const value = 20;
        const { result } = renderHook(() => useCounter(value));
        expect(result.current.counter).toBe(value);
    });
    test('should increase value with handleAdd', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.handleAdd();
        });
        expect(result.current.counter).toBe(1);
    });
    test('should decrease value with handleSubtract', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.handleSubtract();
        });
        expect(result.current.counter).toBe(-1);
    });
    test('should reset value with handleReset', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.handleAdd();
        });
        expect(result.current.counter).toBe(1);
        act(() => {
            result.current.handleReset();
        });
        expect(result.current.counter).toBe(0);
    });
})