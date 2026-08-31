import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { GetGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);
    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClick = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }
        const gifs = await GetGifsByQuery(term);
        setGifs(gifs);
    }
    const handleSearch = async (query: string = '') => {
        query = query.toLowerCase().trim();
        if (query.length === 0) return;
        if (previousTerms.includes(query)) return;
        setPreviousTerms([query, ...previousTerms].slice(0, 8));
        const newGifs = await GetGifsByQuery(query);
        setGifs(newGifs);
        gifsCache.current[query] = newGifs;
    }
    return {
        previousTerms, gifs, handleTermClick, handleSearch
    }
}
