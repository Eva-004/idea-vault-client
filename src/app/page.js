import Banner from "@/components/homePage/Banner";
import IdeaStats from "@/components/homePage/IdeaStats";
import TrendingIdeas from "@/components/homePage/TrendingIdeas";
import UserFeedback from "@/components/homePage/UserFeedback";


export default function Home() {
  return (
 <div>
    <Banner></Banner>
    <TrendingIdeas></TrendingIdeas>
    <IdeaStats></IdeaStats>
    <UserFeedback></UserFeedback>
 </div>
  );
}
