function SearchResultsList({results}) {
    let sty = {
        display: "flex",
        flexDirection: "column"
    }
    return (
        <>
            <div  style={sty}>
                {results.map((result, index) => (
                    <div className={"py-2 px-10"} key={index}>
                        {result}
                    </div>
                ))}
            </div>
        </>
    )
}

export default SearchResultsList;
