"use client";
import React, { useState } from "react";

const WaitlistForm: React.FC<any> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white md:py-10 py-4 font-clash">
      <div className="w-full">
        <h1 className="xl:text-[100px] md:text-7xl text-5xl font-normal font-clash text-left">
          Join waitlist
        </h1>
        <p className="mt-4 text-base sm:text-xl text-left text-[#101623]">
          We will send you a link to download The Incc app when available
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-8 font-clash">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-[30px] sm:text-xl text-[#101623]"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="James"
              onChange={handleChange}
              value={formData.firstName}
              className="border-b border-gray-400 focus:outline-none focus:border-gray-800 p-2 text-lg sm:text-xl placeholder:text-black placeholder:text-[16px]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-[30px] sm:text-xl text-[#101623]"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Smith"
              onChange={handleChange}
              value={formData.lastName}
              className="border-b border-gray-400 focus:outline-none focus:border-gray-800 p-2 text-lg sm:text-xl placeholder:text-black placeholder:text-[16px]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[30px] sm:text-xl text-[#101623]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="youremail@gmail.com"
              onChange={handleChange}
              value={formData.email}
              className="border-b border-gray-400 focus:outline-none focus:border-gray-800 p-2 text-lg sm:text-xl placeholder:text-black placeholder:text-[16px]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="text-[30px] sm:text-xl text-[#101623]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="(123) 456-7890"
              onChange={handleChange}
              value={formData.phoneNumber}
              className="border-b border-gray-400 focus:outline-none focus:border-gray-800 p-2 text-lg sm:text-xl placeholder:text-black placeholder:text-[16px]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <p className="text-base">
                By providing my phone number, I hereby agree and accept the
                Terms of Service and Privacy Policy in use of The Incc app.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="emailUpdates" className="mt-1" />
              <label htmlFor="emailUpdates" className="text-base">
                Sign up for our email list for updates, promotions, and more.
              </label>
            </div>
          </div>

          <div className="flex w-full mt-60">
            <button
              type="submit"
              className="w-full text-black border-[1px] border-black py-3 rounded-full font-medium text-xl hover:bg-black hover:text-white transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaitlistForm;
