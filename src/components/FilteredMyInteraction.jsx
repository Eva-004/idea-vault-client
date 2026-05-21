'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import MyInteractionCard from './cards/MyInteractionCard';

const FilteredMyInteraction = ({comments,ideas}) => {
    const userData = authClient.useSession();
        const user = userData.data?.user;
        const filteredComments= comments.filter(comment =>comment.userEmail === user?.email);
        
    return (
        <div className='space-y-4'>
            {
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