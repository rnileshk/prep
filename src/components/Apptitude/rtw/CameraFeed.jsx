import React, { useEffect, useRef, useState } from "react";

const CameraFeed = () => {
  const videoRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera error:", err);
        if (err.name === "NotAllowedError") {
          setErrorMessage(
            "Camera access is blocked. Please allow camera access in your browser settings to continue."
          );
        } else if (err.name === "NotFoundError") {
          setErrorMessage("No camera device found.");
        } else {
          setErrorMessage("Unable to access the camera.");
        }
      }
    };

    enableCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div style={{ display: "none" }}>
      <h3 className="text-sm font-semibold mb-2">Camera Monitoring</h3>

      {errorMessage ? (
        <div className="text-red-600 border border-red-300 bg-red-100 p-2 rounded text-sm">
          {errorMessage}
        </div>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-40 h-32 rounded shadow-md border"
        />
      )}
    </div>
  );
};

export default CameraFeed;
