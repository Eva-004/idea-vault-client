import FilterMyIdeas from "@/components/FilterMyIdeas";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyIdeasPage = async() => {
    const {token} = await auth.api.getToken({
            headers: await headers()
        })
        console.log(token);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-ideas`,{
    headers:{
         authorization: `Bearer ${token}`
    }
  });
  const ideas = await res.json();
  console.log(ideas);
    return (
        <div className='my-10 w-11/12 mx-auto'>
            
                <FilterMyIdeas ideas={ideas}></FilterMyIdeas> 
           
            
        </div>
    );
};

export default MyIdeasPage;