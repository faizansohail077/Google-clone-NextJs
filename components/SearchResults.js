const SearchResults = ({ results: { results } }) => {
    console.log("TCL ~ file: SearchResults.js ~ line 2 ~ SearchResults ~ results", results)

    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-500 text-md mb-5 mt-3">About {results?.results?.searchInformation?.formattedTotalResults} results({results?.results?.searchInformation?.formattedSearchTime}seconds )</p>

            {results?.results?.items.map((result) => {
                return <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a href={result.link} className="text-sm">{result.formattedUrl}</a>
                        <a href={result.link}><h2 className="text-xl text-blue-500 font-medium group-hover:underline">{result.title}</h2></a>

                    </div>
                    <p className="line-clamp-2">
                        {result.snippet}
                    </p>
                </div>
            })}
        </div>
    )
}

export default SearchResults
