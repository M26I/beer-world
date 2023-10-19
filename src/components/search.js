import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ['latin']
})

function Search({ handleChange }) {
  return (
    <div className="w-full md:w-4/6 rounded-xl p-4 ">
      <div className={bebas.className}>
        <label htmlFor="search" className="flex flex-row flex-wrap pb-2 pl-4 text-xl text-title-brown">
          Search
        </label>
      </div>
      <input
        id="search"
        placeholder="What  style are you looking for?"
        onChange={handleChange}
        className="font-bold text-sm py-3 md:w-[30rem] w-full rounded-xl pl-4 shadow-lg focus:outline-none dark:bg-slate-800 dark:text-white"
      />
    </div>
  );
}


export default Search;