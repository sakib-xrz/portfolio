import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "./app.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="portfolio-body">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
