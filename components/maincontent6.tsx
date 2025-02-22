import React from "react";
import { useRouter } from "next/router";

const MainContent6: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/mode"); // Redirect to the /mode page
  };

  return (
    <div className="main-content-xy29">
      <img
        src="/images/car9.svg"
        alt="WIPOD Car"
        className="car-image-xy29 animated-car"
      />
      <div className="welcome-text-xy29">
        <h1>
          Welcome to <strong>WIPOD</strong>
        </h1>
        <h2>Hello Billy! Where do you want to go today?</h2>
        <button className="action-button-xy29" onClick={handleButtonClick}>
          Let's GO WIPOD
        </button>
      </div>
    </div>
  );
};

export default MainContent6;
