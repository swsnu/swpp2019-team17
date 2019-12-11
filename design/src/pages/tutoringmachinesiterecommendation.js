import React from "react";
import Navbar from "./../components/Navbar";
import ContentCardsSection from "./../components/ContentCardsSection";
import Footer from "./../components/Footer";

function TutoringmachineSiteRecommendationPage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <ContentCardsSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Featured Content"
        subtitle=""
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

export default TutoringmachineSiteRecommendationPage;
