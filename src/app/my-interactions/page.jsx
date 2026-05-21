import FilteredMyInteraction from '@/components/FilteredMyInteraction';
import { auth } from '@/lib/auth';
import { getIdeas } from '@/lib/fetchData';
import { headers } from 'next/headers';
import React from 'react';

const MyInteractionsPage = async() => {
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`,{
           headers:{
             authorization: `Bearer ${token}`
           }
    });
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