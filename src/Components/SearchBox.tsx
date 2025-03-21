import "../App.css";

type searchBoxProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    onlyNames: string[];
    popolazioneFiltered: string[];
    setPopolazioneFiltered: React.Dispatch<React.SetStateAction<string[]>>
}

function SearchBox({ search, setSearch, onlyNames, popolazioneFiltered, setPopolazioneFiltered }: searchBoxProps) {

    //console.log(onlyNames)


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;

        setSearch(value);

        if (value != "") {

            setPopolazioneFiltered(
                onlyNames.filter((item) =>
                    item.toLowerCase().startsWith(value.toLowerCase()))
            );

        } else {
            setPopolazioneFiltered(onlyNames);

        }
        // console.log("prova")
        console.log(popolazioneFiltered);

    }


    return (

        <div className="searchbox">
            <input className="ricerca" type="text" placeholder="Search Country" onChange={handleSearch} value={search} />
        </div>

    )
}

export default SearchBox;
