import React from "react";
import WaitlistForm from "./form";
import ImageGridLarge from "./image-grid-large";

const JoinWaitlist = () => {
  return (
    <div className="flex items-center justify-center xl:justify-between xl:mx-36 xl:my-20 md:mx-8 my-4 md:h-screen">
      <div>
        <WaitlistForm />
      </div>
      <div>
        <ImageGridLarge />
      </div>
    </div>
  );
};

export default JoinWaitlist;
