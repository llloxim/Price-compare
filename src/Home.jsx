import Navbar from "./components/Navbar";
import JokeOfTheDay from "./components/HomeComponents/JokeOfTheDay";
import Search from "./components/HomeComponents/Search";
import { useState } from "react";
import SearchResultsList from "./components/HomeComponents/SearchResultsList";
import AddJoke from "./components/HomeComponents/AddJoke";
import ViewJokes from "./components/HomeComponents/ViewJokes";

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState("search");

  return (
    <>
      <Navbar />

      {/* some padding */}
      <div className="py-10 bg-lightyellow"></div>

      <div className="bg-lightyellow h-screen">
        <JokeOfTheDay />

        <div className="container mx-auto px-64 mt-8">
          <div className="grid grid-rows-1">
            <div className="grid grid-cols-3 gap-10">
              <button
                className="bg-lightbrown hover:bg-darkgreen text-white font-medium py-2 px-4 rounded-2xl"
                onClick={() => setSelectedComponent("search")}
              >
                Search For a Joke
              </button>
              <button
                className="bg-lightbrown hover:bg-darkgreen text-white font-medium py-2 px-4 rounded-2xl"
                onClick={() => setSelectedComponent("viewAll")}
              >
                View All Jokes
              </button>
              <button
                className="bg-lightbrown hover:bg-darkgreen text-white font-medium py-2 px-4 rounded-2xl"
                onClick={() => setSelectedComponent("add")}
              >
                Add a Joke
              </button>
            </div>
          </div>
        </div>

        {selectedComponent === "search" && (
          <Search setSearchResults={setSearchResults} />
        )}
        {selectedComponent === "search" && (
          <SearchResultsList results={searchResults} />
        )}

        {selectedComponent === "viewAll" && <ViewJokes />}
        {selectedComponent === "add" && <AddJoke />}
      </div>
    </>
  );
}

export default Home;
