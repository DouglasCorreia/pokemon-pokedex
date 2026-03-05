import { useState } from "react";

function SearchBar ({setSearch}) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearch(inputValue.trim());
  }

  return(
    <>
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <div className="flex justify-end w-full relative ml-auto">
          <input
            type="text"
            placeholder="Pesquise por algum nome de pokémon"
            className="w-full bg-white border border-solid border-red-600 rounded-[120px] px-4 py-3 text-gray-950 placeholder:text-gray-950 outline-none focus:border-red-600"
            onChange={(event) => {setInputValue(event.target.value)}}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          <button
            onClick={handleSearch}
            className="flex items-center justify-center size-10 bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-full absolute top-1/2 right-1 -translate-y-1/2 z-10 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchBar;