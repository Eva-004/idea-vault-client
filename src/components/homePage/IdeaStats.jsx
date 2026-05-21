import { Rocket } from '@gravity-ui/icons';
import React from 'react';
import { FaLightbulb, FaUsers } from 'react-icons/fa';

const IdeaStats = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 py-20'>
            <div className='text-center max-w-2xl mx-auto space-y-4'>
                <h2 className='text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'>
                    Empowering Future Innovators
                </h2>
                <p className='text-gray-600 dark:text-gray-300'>
                    Thousands of creators are sharing startup ideas, validating concepts, and building the next generation of innovative products.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 text-center md:text-left'>

                <div className='group p-7 rounded-3xl border bg-white dark:bg-[#111827] hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl'>
                    <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white flex items-center justify-center text-2xl mx-auto'>
                        <FaLightbulb />
                    </div>

                    <h3 className='text-4xl font-extrabold mt-6'>
                        12K+
                    </h3>

                    <h4 className='text-xl font-semibold mt-3'>
                        Creative Ideas Shared
                    </h4>

                    <p className='text-gray-500 mt-3 leading-relaxed'>
                        Innovative startup concepts shared by creators worldwide.
                    </p>
                </div>

                <div className='group p-7 rounded-3xl border bg-white dark:bg-[#111827] hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl'>
                    <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white flex items-center justify-center text-2xl mx-auto'>
                        <Rocket />
                    </div>

                    <h3 className='text-4xl font-extrabold mt-6'>
                        850+
                    </h3>

                    <h4 className='text-xl font-semibold mt-3'>
                        Startup Launches
                    </h4>

                    <p className='text-gray-500 mt-3 leading-relaxed'>
                        Ideas transformed into real startup journeys.
                    </p>
                </div>

                <div className='group p-7 rounded-3xl border bg-white dark:bg-[#111827] hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl'>
                    <div className='w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white flex items-center justify-center text-2xl mx-auto'>
                        <FaUsers />
                    </div>

                    <h3 className='text-4xl font-extrabold mt-6'>
                        5K+
                    </h3>

                    <h4 className='text-xl font-semibold mt-3'>
                        Active Collaborators
                    </h4>

                    <p className='text-gray-500 mt-3 leading-relaxed'>
                        Entrepreneurs and developers discussing ideas daily.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default IdeaStats;