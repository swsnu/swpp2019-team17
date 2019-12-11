import React from "react";
import Navbar from "./../components/Navbar";
import CtaSection from "./../components/CtaSection";
import StatsSection from "./../components/StatsSection";
import FeaturesSection from "./../components/FeaturesSection";
import Footer from "./../components/Footer";
import { useRouter } from "./../util/router.js";

function TutoringmachineSitePage(props) {
  const router = useRouter();

  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <CtaSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Ready to get started?"
        subtitle="Or please get started now even if you don't feel ready. We're just really going to need you to get started. Click it. Click the button."
        buttonText="Get Started"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <StatsSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        items={[
          {
            title: "Tweets",
            stat: "3,456"
          },
          {
            title: "Following",
            stat: "123"
          },
          {
            title: "Followers",
            stat: "456k"
          },
          {
            title: "Likes",
            stat: "789"
          }
        ]}
      />
      <FeaturesSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <Footer
        color="white"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        copyright="© 2019 Company"
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default TutoringmachineSitePage;
