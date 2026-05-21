
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

import UpdatedIdea from '../UpdatedIdea';
import DeleteIdea from '../DeleteIdea';

const MyIdeaCard = ({idea}) => {
    return (
        <div className=''>
            <Card className='flex md:flex-row justify-between gap-4 md:items-start items-center shadow-xl'>
                <div className='relative w-full lg:w-1/2 h-[40vh]'>
                    <Image src={idea?.image} alt={idea?.title || 'idea title'} fill className='object-cover rounded-2xl'/>
                </div>
                <div className='space-y-2'>
                    <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-800 to-blue-800  bg-clip-text text-transparent'>{idea.title}</h2>
                    <p>{idea.shortDescription}</p>
                    <div className='mt-2 font-bold'>
                        Category : <p className='badge p-2 badge-primary'>{idea.category}</p>
                    </div>
                </div>
                <div className='flex justify-between gap-4 items-center'>
                            <UpdatedIdea id={idea._id} idea={idea}></UpdatedIdea>
                            <DeleteIdea id={idea._id} idea={idea}></DeleteIdea>
                        </div>
            </Card>
        </div>
    );
};

export default MyIdeaCard;