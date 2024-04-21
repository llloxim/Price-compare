function SearchResultsList({results, setDR, setSRL}) {
    let sty = {
        display: "flex",
        flexDirection: "column"
    }

    return (
        <>
            <div  style={sty}>
                {results.map((result, index) => (
                    <div className={"py-2 px-10 hover-grey clickable"} key={index} onClick={() => {
                        setDR(result);
                        setSRL(false);
                    }}>
                        {result.name}
                    </div>
                ))}
            </div>
        </>
    )
}

export default SearchResultsList;
