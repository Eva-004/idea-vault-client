'use client'
import { UpdateProfile } from '@/components/shared/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    return (
        <div className='my-30'>
            <Card className='max-w-100 mx-auto flex flex-col  items-center shadow-md'>
                <Avatar className='w-40 h-40'>
                    <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy='no-referrer' className='w-full object-cover' />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
               <h2 className='font-bold text-xl'>{user?.name}</h2>
               <p className='text-gray-600'>{user?.email}</p>
               <UpdateProfile></UpdateProfile>
            </Card>
        </div>
    );
};

export default ProfilePage;