import Navbar from "./components/Navbar";
import Fetch from "./axios";
function Home() {
  return (
    <>
      <div className="bg-black">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white border border-gray-300 rounded-md py-2 px-4 w-96 placeholder-gray-400 focus:outline-none focus:border-blue-500"
          ></input>
          <Fetch></Fetch>
          <button
            type="submit"
            className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 focus:outline-none hover:bg-gray-100"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
