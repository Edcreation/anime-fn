import  { useState } from 'react';
import { Link } from "react-router-dom";
import Genre from './Genre';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="w-full flex  flex-col bg-slate-100  dark:bg-slate-700 text-gray-950 justify-center items-center p-3">
        <div className=" w-full lg:w-1/2 mb-3">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input type="search" className="relative text-slate-950 m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] dark:text-slate-100 font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primar focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                       placeholder="Search Anime"
                       onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search"
        aria-describedby="button-addon1" />
        <Link to={`/browse/anime/${searchTerm}`}>
            <button className="p-2 rounded ml-3 bg-blue-700 text-gray-200"type="submit" ><i className="fa fa-search" aria-hidden="true"></i> Search</button>
        </Link>
        </div>
    </div>
    <div className="w-full grid h-auto grid-cols-1 md:grid-cols-1 gap-5 text-slate-100 flex-row">
        <p className='text-slate-800 dark:text-slate-200'>Genre</p>
        <Genre />
    </div>
    </div>
  )
}   

export default Search