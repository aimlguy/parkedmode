import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useRouter } from 'next/router';

const AppCarousel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState('frequently'); // State to track active button
  const [searchQuery, setSearchQuery] = useState(''); // State to track search input

  const allApps = [
    { name: 'YouTube', icon: 'images_pop/Group 4569.svg' },
    { name: 'Google', icon: 'images_pop/Group 427319032.svg' },
    { name: 'Google Maps', icon: 'images_pop/Group 427319033.svg' },
    { name: 'Spotify', icon: 'images_pop/Vector (10).svg' },
    { name: 'Chess', icon: 'images_pop/Vector (11).svg' },
    { name: 'YouTube Music', icon: 'images_pop/Group 427319019.svg' },
    { name: 'Play Store', icon: 'images_pop/Vector (12).svg' },
    { name: 'Tetris', icon: 'images_pop/Vector (13).svg' },
    { name: 'Native Maps', icon: 'images_pop/Vector (14).svg' },
    { name: 'Phone', icon: 'images_pop/Vector (15).svg' },
    { name: 'Netflix', icon: 'images_pop/Vector (16).svg' },
    { name: 'Calculator', icon: 'images_pop/Vector (17).svg' },
    { name: 'Assistant', icon: 'images_pop/Assistant.svg', link: '/AI' },
  ];

  // Filter for frequently used apps
  const frequentlyUsedApps = allApps.filter(app =>
    ['YouTube', 'Google', 'Google Maps', 'Spotify', 'Netflix', 'YouTube Music'].includes(app.name)
  );

  // Determine which apps to show based on active button and search
  const appsToShow = activeButton === 'frequently' ? frequentlyUsedApps : allApps;

  // Filter apps based on search query
  const filteredApps = searchQuery
    ? appsToShow.filter(app => app.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : appsToShow;

  const handleAppClick = (app: { name: string; icon: string; link?: string }) => {
    if (app.link) {
      router.push(app.link);
    }
  };

  // Updated flexbox layout to display apps side-by-side when less than 3
  const renderApps = filteredApps.length < 3 ? (
    <div className="filtered-apps-container side-by-side">
      {filteredApps.map((app, index) => (
        <div className="app-icon" key={index} onClick={() => handleAppClick(app)}>
          <img src={app.icon} alt={`${app.name} icon`} />
          <span>{app.name}</span>
        </div>
      ))}
    </div>
  ) : (
    <AliceCarousel
      mouseTracking
      items={filteredApps.map((app, index) => (
        <div className="app-icon" key={index} onClick={() => handleAppClick(app)}>
          <img src={app.icon} alt={`${app.name} icon`} />
          <span>{app.name}</span>
        </div>
      ))}
      responsive={{
        0: { items: 2 },
        568: { items: 3 },
        1024: { items: 5 },
      }}
      controlsStrategy="alternate"
    />
  );

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    setSearchQuery(''); // Clear search when switching between buttons
  };

  const handleSearch = () => {
    // Search is already handled dynamically by searchQuery state and filter
  };

  return (
    <div className="app-carousel-container1">
      <div className="app-carousel1">
        <div className="app-carousel-content1">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div className="search-bar1">
            <input
              type="text"
              placeholder="Search for app or command"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button1" onClick={handleSearch}>
              <img src="/images_pop/Group 427318951.svg" alt="Search" />
            </button>
          </div>

          <div className="button-container1">
            <button
              className={`app-button ${activeButton === 'frequently' ? 'active' : ''}`}
              onClick={() => handleButtonClick('frequently')}
            >
              Frequently Used
            </button>
            <button
              className={`app-button ${activeButton === 'all' ? 'active' : ''}`}
              onClick={() => handleButtonClick('all')}
            >
              All Apps
            </button>
            <br></br>
          </div>

          {renderApps}
        </div>
      </div>
    </div>
  );
};

export default AppCarousel;
