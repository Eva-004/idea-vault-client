
import CommentField from '@/components/CommentField';
import ShowComments from '@/components/ShowComments';
import { auth } from '@/lib/auth';
import { Card} from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';


const IdeaDetailsPage = async ({ params }) => {
  const { id } = await params;
   const {token} = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-ideas/${id}`,{
          headers: {
           authorization: `Bearer ${token}`
        }
  });
  const idea = await res.json();
  console.log(idea);
  
  return (
    <div className='my-10'>
      <h2 className='font-bold text-2xl md:text-3xl text-center mb-8'>Dive Deep Into the Concept Behind This Innovation</h2>
      <div className='w-11/12 mx-auto'>
        <Card className='border border-purple-500 flex lg:flex-row  gap-4 md:gap-10 items-center'>
          <div className='relative w-full lg:w-1/2 h-[40vh] sm:h-[60vh] '>
            <Image src={idea.image} fill alt={idea?.title || 'idea image'} className='object-cover  rounded-2xl absolute' />
            <div className="badge p-4 badge-primary absolute top-5 right-5 z-10">{idea.category}</div>
          </div>
          <div className='lg:w-1/2 '>
            <h2 className='font-bold text-2xl md:text-4xl  bg-gradient-to-r from-purple-800 to-blue-800  bg-clip-text text-transparent'>{idea.title}</h2>
            <p className='mt-2 text-gray-500 dark:text-gray-100'>{idea.detailDescription}</p>
            <div className='flex gap-3 items-center mt-4 dark:text-gray-900 flex-wrap'>
              {
                idea.tags.map((tag, ind) => <div key={ind} className="badge badge-soft p-2 badge-outline">{tag}</div>)
              }
            </div>
            <div className='mt-4 space-y-2'>
              <p className='  sm:text-lg flex items-center gap-1'> <span className='font-semibold'>Targeted Audience:</span> {idea.targetAudience}</p>
              <p className=' sm:text-lg flex items-center gap-1'> <span className='font-semibold'>Estimated Budget:</span > {idea.estimatedBudget}</p>
            </div>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch'>

              <Card className='shadow-lg border border-blue-100 p-5 flex flex-col h-full rounded-2xl'>
                <h2 className='font-semibold text-xl text-blue-900 mb-3 text-center'>
                  Problem Statement
                </h2>

                <p className='text-gray-600 dark:text-gray-100 leading-7 flex-row md:line-clamp-3 text-center md:text-left'>
                  {idea.problemStatement}
                </p>
              </Card>

              <Card className='shadow-lg border border-purple-100 p-5 flex flex-col h-full rounded-2xl'>
                <h2 className='font-semibold text-xl text-purple-900 mb-3 text-center'>
                  Proposed Solution
                </h2>

                <p className='text-gray-600 dark:text-gray-100 leading-7 flex-row md:line-clamp-3 text-center md:text-left'>
                  {idea.proposedSolution}
                </p>
              </Card>

            </div>
          </div>
        </Card>
        <div className='mt-4'>
           <CommentField idea={idea}></CommentField>
        </div>
        <div className='mt-4'>
          <ShowComments idea={idea}></ShowComments>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetailsPage;