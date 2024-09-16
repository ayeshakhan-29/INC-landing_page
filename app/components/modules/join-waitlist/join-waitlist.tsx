"use client";
import React, { useState } from "react";
import WaitlistForm from "./form";
import Thanks from "../thankyou/thankyou";
import ImageGridLarge from "./image-grid-large";

const JoinWaitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle form submission
  const [isSubmitted, setIsSubmitted] = useState(false); // State to show the Thank You component

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true);
    try {
      // Make the API call
      // await fetch("/api/join-waitlist", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Simulate a delay for smoother transition (optional)
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true); // Show Thank You component
      }, 500);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center xl:justify-between xl:mx-28 2xl:mx-36 xl:my-12 md:mx-8 my-4 md:h-[95vh]">
      <div>
        <div
          className={`transition-opacity duration-700 ${
            isSubmitting || isSubmitted ? "opacity-0" : "opacity-100"
          }`}
        >
          {!isSubmitted && <WaitlistForm onSubmit={handleSubmit} />}
        </div>
        <div
          className={`transition-opacity duration-700 ${
            isSubmitted ? "opacity-100" : "opacity-0"
          }`}
        >
          {isSubmitted && <Thanks />}
        </div>
      </div>

      <div>
        <ImageGridLarge />
      </div>
    </div>
  );
};

export default JoinWaitlist;
