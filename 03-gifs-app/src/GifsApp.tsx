import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { GetGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"

export const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);
    const handleTermClick = (term: string) => {
        console.log(term);
    }
    const handleSearch = async (query: string = '') => {
        query = query.toLowerCase().trim();
        if (query.length === 0) return;
        if (previousTerms.includes(query)) return;
        setPreviousTerms([query, ...previousTerms].slice(0, 8));
        const newGifs = await GetGifsByQuery(query);
        setGifs(newGifs);
    }
    return (
        <>
            <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto" />
            <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />
            <PreviousSearches searches={previousTerms} onLabelClick={handleTermClick} />
            <GifList gifs={gifs} />
        </>
    )
}