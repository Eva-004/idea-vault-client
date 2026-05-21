import React from 'react';
import IdeaCard from '../cards/IdeaCard';

const TrendingIdeas = async() => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/trending-ideas`);
      const data = await res.json();
      console.log(data);
    return (
        <div className='my-10 '>
            <div className='space-y-4 max-w-lg mx-auto text-center'>
                <h2 className='text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'>Explore Trending Ideas</h2>
                <p className='text-gray-700'>Discover the most innovative and trending ideas shared by creators and entrepreneurs worldwide.</p>
            </div>
            <div className='mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
              {
                 data.map(idea=> <IdeaCard key={idea._id} idea={idea}></IdeaCard>)
              }
            </div>
        </div>
    );
};

export default TrendingIdeas;