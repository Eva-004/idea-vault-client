import FilteredMyInteraction from '@/components/FilteredMyInteraction';
import { getIdeas } from '@/lib/fetchData';
import React from 'react';

const MyInteractionsPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`);
        const comments = await res.json();
        console.log(comments);
        const ideas = await getIdeas();
    return (
        <div className='my-10 w-11/12 mx-auto'>
            <FilteredMyInteraction comments={comments} ideas={ideas}></FilteredMyInteraction>
        </div>
    );
};

export default MyInteractionsPage;