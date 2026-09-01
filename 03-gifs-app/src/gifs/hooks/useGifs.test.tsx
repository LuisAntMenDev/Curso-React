import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";

describe('useGifs', () => {
    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGifs());
        expect(result.current).toStrictEqual({
            previousTerms: [],
            gifs: [],
            handleTermClick: expect.any(Function),
            handleSearch: expect.any(Function)
        });
    });

    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());
        await act(async () => {
            await result.current.handleSearch('test');
        });
        expect(result.current.gifs.length).toBe(10);
    });
    test('should return a list of gifs when handleTermClick is fired', async () => {
        const { result } = renderHook(() => useGifs());
        await act(async () => {
            await result.current.handleTermClick('test');
        });
        expect(result.current.gifs.length).toBe(10);
    });
    test('should return a list of gifs from cache', async () => {
        const { result } = renderHook(() => useGifs());
        await act(async () => {
            await result.current.handleTermClick('test');
        });
        expect(result.current.gifs.length).toBe(10);
        vi.spyOn(gifActions, 'GetGifsByQuery').mockRejectedValue(new Error('Custom error'))
        await act(async () => {
            await result.current.handleTermClick('test');
        });
        expect(result.current.gifs.length).toBe(10);
    });
    test('should have max 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs());
        vi.spyOn(gifActions, 'GetGifsByQuery').mockResolvedValue([]);
        await act(async () => {
            await result.current.handleSearch('test1');
        });
        await act(async () => {
            await result.current.handleSearch('test2');
        });
        await act(async () => {
            await result.current.handleSearch('test3');
        });
        await act(async () => {
            await result.current.handleSearch('test4');
        });
        await act(async () => {
            await result.current.handleSearch('test5');
        });
        await act(async () => {
            await result.current.handleSearch('test6');
        });
        await act(async () => {
            await result.current.handleSearch('test7');
        });
        await act(async () => {
            await result.current.handleSearch('test8');
        });
        await act(async () => {
            await result.current.handleSearch('test9');
        });
        expect(result.current.previousTerms.length).toBe(8);
        expect(result.current.previousTerms).toStrictEqual([
            'test9', 'test8',
            'test7', 'test6',
            'test5', 'test4',
            'test3', 'test2'
        ]);
    });
})