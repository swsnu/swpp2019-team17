import React from "react";
import Navbar from "./../components/Navbar";
import SignInSection from "./../components/SignInSection";
import Footer from "./../components/Footer";

function TutoringmachineSiteSigninPage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <SignInSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Welcome back"
        subtitle=""
        buttonText="Sign in"
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

export default TutoringmachineSiteSigninPage;
