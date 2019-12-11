import React from "react";
import Navbar from "./../components/Navbar";
import SignUpSection from "./../components/SignUpSection";
import Footer from "./../components/Footer";

function TutoringmachineSiteSignupPage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <SignUpSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Get yourself an account"
        subtitle=""
        buttonText="Sign up"
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

export default TutoringmachineSiteSignupPage;
