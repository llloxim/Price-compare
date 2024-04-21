import React from "react";

function ViewJokes({results}) {
  const sty = {
    borderWidth: "2px",
    borderColor: "grey",
    borderRadius: "1em"
  }
  return (
      <>
        {
          results.map((item, index) =>
              (<div className="flex justify-center pt-10" key={index}>
                <div className="w-full max-w-md pl-3 pt-3" style={sty}>
                  <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                  <p className="text-gray-600 mb-4">{item.joke}</p>
                </div>
              </div>)
          )
        }
      </>
  )
}

export default ViewJokes;
