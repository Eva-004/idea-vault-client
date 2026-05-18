import Banner from "@/components/homePage/Banner";
import TrendingIdeas from "@/components/homePage/TrendingIdeas";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
 <div>
    <Banner></Banner>
    <TrendingIdeas></TrendingIdeas>
    <ToastContainer />
 </div>
  );
}
