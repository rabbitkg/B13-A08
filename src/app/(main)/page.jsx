import HeroBanner from "@/components/shared/Hero-banner";
import NewHeroBanner from "@/components/shared/NewHeroBanner";
import FeaturedAnimalsPage from "./featuredAnimals/page";
import ExtraSections from "@/components/shared/ExtraSections";

export default function Home() {
  return (
    <div className="mt-4">
    

    {/* <HeroBanner /> */}
    <NewHeroBanner/>
    <FeaturedAnimalsPage/>
    <ExtraSections/>
    <HeroBanner/>
    </div>
  );
}
