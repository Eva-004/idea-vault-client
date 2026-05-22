'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import MyInteractionCard from './cards/MyInteractionCard';
import { Button } from '@heroui/react';
import Link from 'next/link';

const FilteredMyInteraction = ({ comments, ideas }) => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const filteredComments = comments.filter(comment => comment.userEmail === user?.email);

    return (
        <div className='space-y-4'>
            {

                filteredComments.length === 0 ?
                    <div className="text-center text-gray-800 text-xl dark:text-gray-100 py-10 mb-4 flex flex-col">
                        No interaction added yet.

                        <Button className={'border border-purple-900 dark:border-pink-600 text-purple-900 dark:text-pink-600'}>
                            <Link href='/ideas' className="block">Explore Ideas</Link></Button>
                    </div>
                    :

                    filteredComments.map(comment => {

                        const matchedIdea = ideas.find(
                            idea => idea._id === comment.ideaId
                        );

                        return (
                            <MyInteractionCard
                                key={comment._id}
                                idea={matchedIdea}
                                comment={comment}
                            ></MyInteractionCard>
                        )
                    })
            }
        </div>
    );
};

export default FilteredMyInteraction;