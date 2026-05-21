import { TrashBin } from '@gravity-ui/icons';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import UpdateComment from '../UpdateComment';

const MyInteractionCard = ({ idea, comment }) => {
    return (
        <div className='max-w-5xl'>
            <Card className='flex md:flex-row  gap-8 md:items-start items-center shadow-xl'>
                <div className='relative w-full md:w-[220px] h-[220px] shrink-0'>
                    <Image src={idea?.image} alt={idea?.title || 'idea title'} fill className='absolute object-cover rounded-2xl' />
                    <p className='absolute top-5 right-5 badge p-2 badge-primary'>{idea?.category}</p>
                </div>
                <div className=''>
                    <div className='space-y-2'>
                        <p className='text-lg line-clamp-2'> <span className='text-xl font-bold '>Comment:</span> {comment.comment}</p>
                        <p className='text-gray-500'>{comment.timeStamp}</p>
                        <Button className='text-purple-800 border border-purple-800'><Link href={`http://localhost:3000/ideas/${idea?._id}`}>View Interacted Idea</Link></Button>
                    </div>
                    <div className='flex mt-4 gap-4 items-center'>
                        <UpdateComment updateComment={comment} idea={idea}></UpdateComment>
                        <Button className='border border-red-500 text-red-500 rounded-none'><TrashBin></TrashBin>Delete</Button>
                        
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MyInteractionCard;