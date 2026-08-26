interface Props {
    searches: string[];
    onLabelClick: (term: string) => void;
}

export const PreviousSearches = ({ searches, onLabelClick }: Props) => {
    return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {searches.map(term => (
                    <li onClick={() => onLabelClick(term)} key={term}>{term}</li>
                ))}
            </ul>
        </div>
    )
}
