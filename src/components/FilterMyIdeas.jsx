'use client'

import { authClient } from "@/lib/auth-client";
import MyIdeaCard from "./cards/MyIdeaCard";
import { Button } from "@heroui/react";
import Link from "next/link";

const FilterMyIdeas = ({ideas}) => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const filteredIdeas = ideas.filter(idea => idea.userEmail === user?.email);
  
    return (
        
        <div className="space-y-4">
            {
                filteredIdeas.length === 0 ? 
                <div className="text-center text-gray-800 text-xl dark:text-gray-100 py-10 mb-4 flex flex-col">
                    No idea added yet.

                    <Button  className={'border border-purple-900 dark:border-pink-600 text-purple-900 dark:text-pink-600'}>
                        <Link href='/add-idea' className="block">Add Idea</Link></Button>
                </div>
                :
                filteredIdeas.map(idea=> <MyIdeaCard key={idea._id} idea={idea}></MyIdeaCard>)
            }
        </div>
    );
};

export default FilterMyIdeas;