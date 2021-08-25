import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter, Route } from "react-router-dom";
import Cockpit from "./components/cockpit";
import Formation from "./components/formation";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={Cockpit} />
        <Route exact path="/category/:id/" component={Formation} />{" "}
        {/* Change the componant ! */}
        <Contact data={landingPageData.Contact} />
      </BrowserRouter>
    </div>
  );
};

export default App;
