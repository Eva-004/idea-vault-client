export const getIdeas=async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-ideas`);
  const ideas = await res.json();
  return ideas;
}