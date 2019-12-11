import React from "react";
import TutoringmachineSitePage from "./tutoringmachinesite";
import TutoringmachineSiteSignupPage from "./tutoringmachinesitesignup";
import TutoringmachineSiteSigninPage from "./tutoringmachinesitesignin";
import TutoringmachineSiteRecommendationPage from "./tutoringmachinesiterecommendation";
import { Switch, Route, Router } from "./../util/router.js";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route
            exact
            path="/tutoringmachine.site/"
            component={TutoringmachineSitePage}
          />

          <Route
            exact
            path="/tutoringmachine.site/signup"
            component={TutoringmachineSiteSignupPage}
          />

          <Route
            exact
            path="/tutoringmachine.site/signin/"
            component={TutoringmachineSiteSigninPage}
          />

          <Route
            exact
            path="/tutoringmachine.site/recommendation/"
            component={TutoringmachineSiteRecommendationPage}
          />

          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
