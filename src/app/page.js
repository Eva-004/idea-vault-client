import Banner from "@/components/homePage/Banner";
import IdeaStats from "@/components/homePage/IdeaStats";
import TrendingIdeas from "@/components/homePage/TrendingIdeas";


export default function Home() {
  return (
 <div>
    <Banner></Banner>
    <TrendingIdeas></TrendingIdeas>
    <IdeaStats></IdeaStats>
 </div>
  );
}
