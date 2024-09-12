import React from "react";

const CommunityGuidelines = () => {
  const guidelinesData = [
    {
      title: "Respectful Behavior",
      content: `Be considerate, understanding, and respectful to others. 
      Remember that behind each profile is a real person with their own experiences and perspectives. 
      Steer clear of discriminatory conduct, hate speech, and insulting language. 
      Be mindful of cultural sensitivities and differing viewpoints to avoid any disputes.`,
    },
    {
      title: "Content Standards",
      content: `Share content that is legal, respectful, and in compliance with intellectual property rights. 
      Do not post or share content that involves sexual exploitation or abuse of minors; prohibits violence, 
      self-harm, violence, and illegal activities; or any form of exploitation such as bullying or harassment 
      of any kind. Avoid harmful, false, or deceptive information. Refrain from hateful content, terrorism, 
      or violent extremism.`,
    },
    {
      title: "Authenticity",
      content: `Be genuine and represent yourself truthfully. 
      Do not impersonate others, create fake accounts, or engage in deceptive practices.`,
    },
    {
      title: "Privacy and Consent",
      content: `Respect the privacy of others. Do not share personal information without explicit consent. 
      Obtain consent before sharing images or content featuring others, especially in private or sensitive situations.`,
    },
    {
      title: "Safety",
      content: `If you find any content or behavior that violates these guidelines or poses a threat to the safety 
      of the community, please remember you can always submit a report. We reserve the right to remove or restrict 
      account access for users whom we have reason to believe, in our sole discretion, pose a danger to others 
      or find any content or user activity that violates our community guidelines.`,
    },
    {
      title: "Moderation and Reporting",
      content: `You can always report any violations of these guidelines using the platform’s reporting tools. 
      Understand that the platform may moderate content to maintain a positive and safe community environment.`,
    },
    {
      title: "AI Usage in Profiles and Communications",
      content: `Our community values genuine interactions and human connections. 
      Therefore, unless clearly identified as AI-generated, users are discouraged from using artificial intelligence 
      tools in their profiles or communications. Our goal is to promote authentic engagement, and we encourage users 
      to interact as themselves rather than through automated means. This helps foster meaningful conversations 
      and a vibrant community experience.`,
    },
    {
      title: "Community Responsibility",
      content: `We encourage positive contributions to the community by assisting and educating fellow users in 
      understanding and following these guidelines so they can comprehend and abide by our values. Foster an 
      inclusive environment where all users feel welcome and valued.`,
    },
  ];

  return (
    <div className="md:min-h-screen bg-white py-16 font-clash mx-4 lg:mx-28 xl:mx-40">
      <div className="flex flex-col gap-5 lg:gap-10 text-left">
        <h1 className="text-4xl md:text-5xl lg:text-[70px] text-[#101623] uppercase">
          Community Guidelines
        </h1>
        <div className="flex h-[1px] w-60 md:w-76 bg-black"></div>

        <p className="md:text-lg text-base text-[#101623]">
          Welcome to The INCC! Our community is a diverse and vibrant space
          where users from around the world come together to share, connect, and
          engage with each other. To ensure a positive and enriching experience
          for everyone, we’ve established the following detailed Community
          Guidelines. We want everyone in our community to be able to easily
          comprehend and follow these guidelines. Please be aware that you must
          be at least 18 years old to join our community. By using our platform,
          you agree to adhere to these guidelines:
        </p>
      </div>

      {/* Guidelines Section */}
      <div className="mt-12 text-[#101623] space-y-10">
        {guidelinesData.map((guideline, index) => (
          <div key={index}>
            <h2 className="lg:text-lg md:text-2xl text-xl uppercase">
              {index + 1}. {guideline.title}
            </h2>
            <p className="mt-3 lg:mt-8 leading-7 text-base md:text-lg">
              {guideline.content}
            </p>
          </div>
        ))}
      </div>
      <div className="text-base md:text-lg">
        <br />
        <p>
          Failure to comply with these detailed Community Guidelines may result
          in various actions, including content removal, warning messages,
          account suspension, or termination. The INCC reserves the right to
          enforce these guidelines at its discretion.
        </p>
        <br />
        <p>
          Thank you for being an integral part of our community and for your
          commitment to creating a respectful and engaging environment for
          everyone!
        </p>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
