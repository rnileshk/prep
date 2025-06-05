import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "./utils/db"; // adjust path if needed
import { Coding } from "./utils/schema";
import { eq } from "drizzle-orm";
import Webcam from "react-webcam";
import { WebcamIcon, Lightbulb } from "lucide-react";
import { Button } from "@mui/material"; // keep this if using shadcn/ui or define your own

const Interview = () => {
  const { interviewId } = useParams();
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    getInterviewDetails();
  }, []);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices = devices.filter((device) => device.kind === "videoinput");
      videoDevices.forEach((device, index) => {
        console.log(`${index + 1}: ${device.label} - ID: ${device.deviceId}`);
      });
    });
  }, []);

  const getInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(Coding)
        .where(eq(Coding.mockId, interviewId));
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Failed to fetch interview data:", error);
    }
  };

  return (
    <div style={{ minHeight: "70vh", padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Let's Get Started</h2>

      <div className="cHead">
        {/* Interview Details */}
        <div className="coding-heading">
          <div className="coding-title">
            <h3 className="text-lg">
              Selected Language:{" "}
              {interviewData?.launguage || "Loading..."}
            </h3>
            <h3 className="text-lg">
              Types of Questions:{" "}
              {interviewData?.details || "Loading..."}
            </h3>
            <h3 className="text-lg">
              Number of Questions:{" "}
              {interviewData?.number || "Loading..."}
            </h3>
          </div>

          <div className="note">
            <h2>
              <Lightbulb  style={{ color: "yellowgreen" }}/>
              <strong style={{ color: "yellowgreen" }}>Information</strong>
            </h2>
            <p>
              Please enable camera and microphone to proceed.
            </p>
          </div>
        </div>

        {/* Webcam Section */}
        <div style={{ backgroundColor: "#f0f0f0", borderRadius: "8px", padding: "1rem", marginTop: "1rem" }}>
          {webCamEnabled ? (
            <Webcam
              mirrored={true}
              audio={true}
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              style={{ width: "400px" }}
            />
          ) : (
            <>
              <div >
                <WebcamIcon style={{ width: "300px", height: "300px" }} />
              </div>
              <div className="flex justify-center items-center">
                <Button
                  onClick={() => setWebCamEnabled(true)}
                  style={{ border: "1px solid blue", padding: "1rem", borderRadius: "8px", fontWeight: "bold" }}
                >
                  Enable Web Cam and Microphone
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to={`/coding/${interviewId}/start`}>
          <Button style={{ background: "#3ba3e6", color: "white", fontWeight: "bold", padding: "1rem", fontSize: "1.2rem", borderRadius: "0.5rem" }} className="cursor-pointer">Start Interview</Button>
        </Link>
      </div>
    </div>
  );
};

export default Interview;
