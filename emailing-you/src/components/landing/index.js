import React from "react";
import Lottie from "react-lottie";
import animationMail from "../../assets/lotties/mail-animation.json";

const Landing = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationMail,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ width: "100%", height: "89vh" }}>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="text-center">
        <h1>Handcrafted Letters Just for You!</h1>
      </div>
    </div>
  );
};

export default Landing;
