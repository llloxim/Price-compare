import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResultsList from "./SearchResultsList.jsx";


function Search({ results, setSearchResults }) {
  const [input, setInput] = useState("");
  const [detailedResult, setDetailedResult] = useState("")
  const [showSRL, setSRL] = useState(false)


  const sty = {
    borderWidth: "2px",
    borderColor: "grey",
    borderRadius: "1em"
  }

  const fetchJoke = (value) => {
    if (!value) {
      setSearchResults([]);
      return;
    }

    fetch("http://localhost:5050/record/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchTerm: value }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setSearchResults(data);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setSearchResults([]);
      });

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     const results = json.filter((user) => {
    //       return (
    //         value &&
    //         user &&
    //         user.name &&
    //         user.name.toLowerCase().includes(value)
    //       );
    //     });
    //     setSearchResults(results);
    //   });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchJoke(value);
  };

  return (
    <>
      <div className="flex-col justify-center items-center my-16" >
        <div className="relative">
          <div>
            <h3 className="mt-6 text-center text-md font-medium text-gray-700 pb-4">
              Search for jokes posted by users
            </h3>
          </div>

          <div className="flex-col bg-white border border-gray-300 rounded-xl" >
            <div className="relative">

              <FaSearch
                  id="search-icon"
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
              />
              <input
                  type="text"
                  placeholder="Search..."
                  value={input}
                  spellCheck={false}
                  onChange={(e) => handleChange(e.target.value)}
                  onClick={() => setSRL(true)}
                  className="rounded-xl py-2 px-10 w-[720px] placeholder-gray-400 focus:outline-none focus:border-lightbrown"
              />
            </div>
            {showSRL && <SearchResultsList results={results} setDR={setDetailedResult} setSRL={setSRL}/>}
          </div>
          {detailedResult &&
              <div className="flex justify-center pt-10">
                <div className="w-full max-w-md pl-3 pt-3" style={sty}>
                  <h2 className="text-2xl font-bold mb-2">{detailedResult.name}</h2>
                  <p className="text-gray-600 mb-4">{detailedResult.joke}</p>
                </div>
              </div>}
        </div>
      </div>
    </>
  );
}

export default Search;
