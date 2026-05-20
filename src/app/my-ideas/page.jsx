import FilterMyIdeas from "@/components/FilterMyIdeas";


const MyIdeasPage = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-ideas`);
  const ideas = await res.json();
  console.log(ideas);
    return (
        <div className='my-10 w-11/12 mx-auto'>
            <FilterMyIdeas ideas={ideas}></FilterMyIdeas>
        </div>
    );
};

export default MyIdeasPage;