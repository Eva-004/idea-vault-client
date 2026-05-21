
import { TrashBin } from '@gravity-ui/icons';
import { Button, Card } from '@heroui/react';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import UpdateComment from './UpdateComment';
import DeleteComment from './DeleteComment';
import CommentCard from './cards/CommentCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const ShowComments = async ({ idea }) => {
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
    const expectedComments = comments.filter(cmt => idea?._id === cmt.ideaId);
    console.log(expectedComments);
    return (
        <div className='space-y-3'>
            {
                expectedComments.map(cmt => <CommentCard key={cmt._id} idea={idea} cmt={cmt}></CommentCard>
                )
            }
        </div>
    );
};

export default ShowComments;