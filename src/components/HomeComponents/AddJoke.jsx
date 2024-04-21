import React, { useState } from "react";

const AddJoke = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission TODO
    console.log("Submitted:", { title, description });
    // Reset form fields
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="flex justify-center pt-32">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">Add your joke</h2>
          <p className="text-gray-600 mb-4">Only unique jokes are accepted.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-lightblue"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full h-24 resize-none focus:outline-none focus:border-lightblue"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-lightbrown hover:bg-darkgreen text-white font-medium py-2 px-4 rounded-2xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddJoke;
