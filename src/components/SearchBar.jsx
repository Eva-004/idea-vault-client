'use client'
import { Label, SearchField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const SearchBar = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSearch=()=>{
        router.push(`/ideas?search=${search}`);

    }
    return (
        <div className='flex gap-4 items-baseline-last '>
            <SearchField name="search" onClear={()=> setSearch('')} >
                        <Label className='font-bold text-xl'>Search Idea</Label>
                        <SearchField.Group >
                            <SearchField.SearchIcon />
                            <SearchField.Input value={search} 
                            onChange={e=> setSearch(e.target.value)}
                            className="w-70 " placeholder="Search your desired idea..." />
                            <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>

            <button onClick={handleSearch} className='btn  border-0 text-white  bg-gradient-to-r from-purple-700 to-blue-800 '>Search</button>
        </div>
    );
};

export default SearchBar;