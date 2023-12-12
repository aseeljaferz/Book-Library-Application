import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { TbFilterSearch } from 'react-icons/tb'

const SearchFilter = ({ books, setSearchQuery}) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchText(query);
        setSearchQuery(query); // Pass the search query to the parent component
    };
    // const handleSearchCriteria = (e) => {
    //     const criteria = e.target.value;
    //     setSearchCriteria(criteria);
    // }
    return (
        <div className='p-4'>
            <div className='flex flex-row justify-evenly items-center  w-[250px]'>
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <BiSearchAlt className='h-5 w-5 fill-slate-300' />
                    </span>
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search for book..."
                        type="text"
                        name="search"
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </label>
                {/* <select
                    className="bg-white border border-slate-300 rounded-md py-2 pl-3 pr-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    // value={searchCriteria}
                    onChange={handleSearchCriteria}
                >
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                </select>
                <TbFilterSearch /> */}
            </div>
        </div>
    )
}

export default SearchFilter