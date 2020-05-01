import React, { useEffect } from "react";
import Home from "./Home";
const Resume = () => {
  useEffect(() => {
    window.open(
      "https://drive.google.com/file/d/1SOMGGKHNH8B8hsSNpSrC6rTnHPPgFBf2/view",
      "_blank"
    );
  });
  return <Home />;
};
export default Resume;
