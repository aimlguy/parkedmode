import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Speedometer from "../components/speed";
import AppCarousel from "../components/AppCarousel"; // Import your AppCarousel component

export default function Home() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(true); // Manage carousel visibility

  return (
    <div className="container">
      <Head>
        <title>Car Dashboard</title>
      </Head>

      <Header />

      {/* Flex container to align the Speedometer and AppCarousel */}
      <div className="main-content">
        <div className="speedometer-section">
          <Speedometer />
        </div>

        {/* Render the AppCarousel only if it's open */}
        {isCarouselOpen && (
          <div className="carousel-section">
            <AppCarousel onClose={() => setIsCarouselOpen(false)} />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

