import Navbar from "./components/navbar";
import Image from "next/image";
import { EnhancedNavigation } from "./components/EnhancedNavigation";
import { MatchCoverageCarousel } from "./components/MatchCoverageCarousel";
import { LatestNewsCarousel } from "./components/LatestNewsCarousel";
import { UpcomingMatches } from "./components/UpcomingMatches";
export default function HomePage() {
  return (
    <main>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className=" flex flex-col gap-10 min-h-[calc(100vh-4rem)] items-center justify-center">
          <div className="relative w-full h-full">
            
            <div className="relative w-full h-full">
              <Image
                src="/images/logo1.png"
                alt="Hero Image"
                width={1600} // Replace with the actual width of your image
                height={200} // Replace with the actual height of your image
                priority // Optional: Ensures the image is loaded quickly
              />
            </div>
          </div>
          <div>
            <EnhancedNavigation />
          </div>
          <div>
            <MatchCoverageCarousel />
          </div>
          <div>
            <LatestNewsCarousel />
          </div>
          <div>
            <UpcomingMatches />
          </div>
        </div>
      </div>
    </main>
  );
}