import { TrashBin } from '@gravity-ui/icons';
import { Button, Card } from '@heroui/react';
import React from 'react';
import { BiEdit } from 'react-icons/bi';

const ShowComments = async ({ idea }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`);
    const comments = await res.json();
    const expectedComments = comments.filter(cmt => idea._id === cmt.ideaId);
    console.log(expectedComments);
    return (
        <div className='space-y-3'>
            {
                expectedComments.map(cmt => <Card key={cmt._id} className='border border-purple-800 max-w-xl'>
                    <div className='flex justify-between  items-center'>
                        <div className='space-y-2'>
                            <h2>{cmt.userName}</h2>
                            <p className='text-gray-600 text-sm'>{cmt.timeStamp}</p>
                        </div>
                        <div className='flex justify-between gap-4 items-center'>
                            <Button className='border border-red-500 text-red-500 rounded-none'><TrashBin></TrashBin>Delete</Button>
                            <Button className='border border-blue-700 text-blue-700 rounded-none'><BiEdit></BiEdit> Edit</Button>
                        </div>
                    </div>
                    <div className='mt-2 space-y-2'>
                        <p>{cmt.comment}</p>

                    </div>
                </Card>
                )
            }
        </div>
    );
};

export default ShowComments;