import HeroBanner from "@/components/shared/Hero-banner";
import NewHeroBanner from "@/components/shared/NewHeroBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-4">
    

    {/* <HeroBanner /> */}
    <NewHeroBanner/>
    </div>
  );
}
