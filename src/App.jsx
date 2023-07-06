import { useEffect } from "react";
// import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import Error from "./Error";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Update the title tag on route change
    const currentRoute = location.pathname;

    // Define the route-title mappings
    const routeTitleMappings = {
      "/": "showmeelove || home",
      "/signup": "showmeelove || create account",
      "/login": "showmeelove || login",
      "/forgot-password": "showmeelove || forgot password",
      "*": "showmeelove || error",
      // Add more routes and titles as needed
    };

    // Set the default title
    let pageTitle = "showmeelove";

    // Check if the current route has a corresponding title mapping
    if (routeTitleMappings.hasOwnProperty(currentRoute)) {
      // Update the page title
      pageTitle = routeTitleMappings[currentRoute];
    }

    // Set the updated title tag directly in the HTML document
    document.title = pageTitle;
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
