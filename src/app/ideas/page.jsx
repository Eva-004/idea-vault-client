
import IdeaCard from '@/components/cards/IdeaCard';
import FilteredIdeas from '@/components/FilteredIdeas';
import SearchBar from '@/components/SearchBar';

import React from 'react';

const IdeasPage = async ({searchParams}) => {
    const params = await searchParams;
    const search = params?.search || ""
    const category = params?.category || ""
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-ideas?search=${search}&category=${category}`,{
        cache: "no-store"
    });
    const data = await res.json();
    console.log(data);
    return (
        <div className='py-10   w-11/12 mx-auto'>
            <div className='text-center space-y-2'>
                <h2 className='text-4xl font-bold '>Explore All Ideas</h2>
                <p className='text-gray-700'>Discover creative ideas shared by innovators.</p>
            </div>
            <div className=' flex flex-col md:flex-row justify-between items-center mt-4'>
                <SearchBar ></SearchBar>
             
                    <FilteredIdeas></FilteredIdeas>
               
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    data.map(idea => <IdeaCard key={idea._id} idea={idea}></IdeaCard>)
                }
            </div>
        </div>
    );
};

export default IdeasPage;