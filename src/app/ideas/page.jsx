
import IdeaCard from '@/components/cards/IdeaCard';
import SearchBar from '@/components/SearchBar';

import React from 'react';

const IdeasPage = async ({searchParams}) => {
    const params = await searchParams;
    const search = params?.search || ""
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-ideas?search=${search}`,{
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
            <div >
                <SearchBar ></SearchBar>
                <div>
                    
                </div>
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