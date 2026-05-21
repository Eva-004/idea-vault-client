import { FaUserCircle, FaRegCommentDots, FaThumbsUp } from 'react-icons/fa';
const UserFeedback = () => {
    return (
      <div className='max-w-6xl mx-auto px-4 py-20'>
            <div className='text-center max-w-2xl mx-auto space-y-4'>
                <h2 className='text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'>
                    Real Feedback from Community
                </h2>
                <p className='text-gray-600 dark:text-gray-300'>
                    See how innovators are reacting and improving ideas in real time discussions.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-14'>

                <div className='p-6 rounded-3xl border bg-white dark:bg-[#111827] space-y-4 hover:shadow-xl transition'>
                    <div className='flex items-center gap-3'>
                        <FaUserCircle size={32} />
                        <div>
                            <h4 className='font-semibold'>Nusrat Jahan</h4>
                            <p className='text-xs text-gray-500'>AI Idea Review</p>
                        </div>
                    </div>

                    <p className='text-gray-600'>
                        “This idea is strong, but you should validate user demand before building MVP.”
                    </p>

                    <div className='flex items-center justify-between text-sm text-gray-500'>
                        <div className='flex items-center gap-1'>
                            <FaThumbsUp size={16} /> Helpful
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaRegCommentDots size={16} /> Reply
                        </div>
                    </div>
                </div>

                <div className='p-6 rounded-3xl border bg-white dark:bg-[#111827] space-y-4 hover:shadow-xl transition'>
                    <div className='flex items-center gap-3'>
                        <FaUserCircle size={32} />
                        <div>
                            <h4 className='font-semibold'>Rahim Ahmed</h4>
                            <p className='text-xs text-gray-500'>Startup Advice</p>
                        </div>
                    </div>

                    <p className='text-gray-600'>
                        “Focus more on problem clarity. Investors care more about problem than solution.”
                    </p>

                    <div className='flex items-center justify-between text-sm text-gray-500'>
                        <div className='flex items-center gap-1'>
                            <FaThumbsUp size={16} /> Helpful
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaRegCommentDots size={16} /> Reply
                        </div>
                    </div>
                </div>

                <div className='p-6 rounded-3xl border bg-white dark:bg-[#111827] space-y-4 hover:shadow-xl transition'>
                    <div className='flex items-center gap-3'>
                        <FaUserCircle size={32} />
                        <div>
                            <h4 className='font-semibold'>Karim Khan</h4>
                            <p className='text-xs text-gray-500'>Product Thinking</p>
                        </div>
                    </div>

                    <p className='text-gray-600'>
                        “Try adding early user interviews. It will increase your success rate significantly.”
                    </p>

                    <div className='flex items-center justify-between text-sm text-gray-500'>
                        <div className='flex items-center gap-1'>
                            <FaThumbsUp size={16} /> Helpful
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaRegCommentDots size={16} /> Reply
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserFeedback;