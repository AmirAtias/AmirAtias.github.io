/** @jsx jsx */
import { useContext } from "react";
import UserContext from "./UserContext";
import { css, jsx } from "@emotion/core";
const mainDivCss = css({
  background:
    "url(https://liip.rokka.io/www_articlebig_3/o-dpr-1/95d3e8/how-to-become-software-developer.jpg) no-repeat center center fixed",
  "-webkit-background-size": "cover",
  "-moz-background-size": " cover",
  " -o-background-size": "cover",
  "background-size": "cover",
  height: "93vh",
  display: "flex",
  "flex-flow": "column wrap",
  "align-items": "center",
  color: "white",
  "justify-content": "center"
});
const sds = css({
  "background-color": "black",
  opacity: "0.7",
  padding: "center",
  "margin-right": "auto",
  "margin-left": "auto",
  "border-radius": "10px",
  width: "50%",
  "text-align": "center"
});
const title = css({
  "text-decoration": "underline",
  "font-family": "'Josefin Sans', sans-serif"

  //width: "50%",
  //"text-align": "center"
});
const AboutMe = () => {
  const user = useContext(UserContext);

  return (
    <div css={mainDivCss}>
      <div css={sds}>
        <h2 css={title}>about me</h2>
        <p>{user.basics.summary}</p>
      </div>
    </div>
  );
};
export default AboutMe;
