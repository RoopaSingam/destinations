import React, { useEffect, useRef } from "react";
// import "./styles.css";

export default function Vedio() {
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
    <div>
      <div>
        <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src="https://cdn.videvo.net/videvo_files/video/free/2012-08/small_watermarked/hd0213_preview.webm"
          ref={videoEl}
        />
      </div>
    </div>
  );
}
