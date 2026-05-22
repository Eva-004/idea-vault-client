'use client'
import React from 'react';
import UpdateComment from '../UpdateComment';
import DeleteComment from '../DeleteComment';
import { Card } from '@heroui/react';
import { authClient } from '@/lib/auth-client';

const CommentCard = ({ idea, cmt }) => {
    const userData = authClient.useSession();
    const user = userData?.data?.user;
    return (
        <Card className='border border-purple-800 max-w-xl'>
            <div className=' flex flex-col sm:flex-row justify-between gap-4  items-center'>
                <div className='space-y-2'>
                    <h2>{cmt.userName}</h2>
                    <p className='text-gray-600 text-sm'>{cmt.timeStamp}</p>
                </div>
                <div className='flex justify-between gap-4 items-center'>
                    {
                        user?.email === cmt.userEmail &&
                        <>
                            <UpdateComment updateComment={cmt} idea={idea}></UpdateComment>

                            <DeleteComment deleteComment={cmt}></DeleteComment>
                        </>
                    }

                </div>
            </div>
            <div className='mt-2 space-y-2'>
                <p>{cmt.comment}</p>

            </div>
        </Card>
    );
};

export default CommentCard;