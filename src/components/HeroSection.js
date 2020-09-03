import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { useEffect, useRef } from "react";

function HeroSection() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <div className="hero-container">
      <video
        playsInline
        loop
        muted
        controls
        alt="All the devices"
        src="https://vod-progressive.akamaized.net/exp=1599165408~acl=%2A%2F638464510.mp4%2A~hmac=033074b5990872e9c13aee6df2bdbf34ab262dec06c7883db9003a4c39fc4a02/vimeo-prod-skyfire-std-us/01/3349/7/191745474/638464510.mp4?filename=Full+Moon+-+6435.mp4"
        ref={videoEl}
      />

      <h3 style={{color:"white"}}>ADVENTURE AWAITS</h3>
      <p>Live in the moemet</p>
      <Button
        className="btns"
        buttonSize="btn--large"
        buttonStyle="btn--outline"
      >
        LETS GO
      </Button>
    </div>
  );
}

export default HeroSection;
