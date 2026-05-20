'use client'

import { authClient } from "@/lib/auth-client";
import MyIdeaCard from "./cards/MyIdeaCard";

const FilterMyIdeas = ({ideas}) => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const filteredIdeas = ideas.filter(idea => idea.userEmail === user?.email);

    return (
        <div className="space-y-4">
            {
                filteredIdeas.map(idea=> <MyIdeaCard key={idea._id} idea={idea}></MyIdeaCard>)
            }
        </div>
    );
};

export default FilterMyIdeas;