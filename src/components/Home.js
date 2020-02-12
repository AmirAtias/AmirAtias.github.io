/** @jsx jsx */

import { css, jsx } from "@emotion/core";

const Home = () => {
  const mainDivCss = css({
    background:
      "url(https://i.ibb.co/ph2MDzV/Whats-App-Image-2020-01-25-at-16-55-15.jpg) no-repeat center center fixed",
    "-webkit-background-size": "cover",
    "-moz-background-size": " cover",
    " -o-background-size": "cover",
    "background-size": "cover",
    height: "93vh",
    display: "flex",
    "flex-flow": "column wrap",
    "align-items": "center",
    "justify-content": "center",
    color: "white"
  });
  const myImgCss = css({
    height: "150px",
    width: "150px",
    "-webkit-border-radius": "50%",
    "-moz-border-radius": "50%",
    "-ms-border-radius": "50%",
    "-o-border-radius": " 50%",
    "border-radius": " 50%",
    background:
      "url('https://i.ibb.co/7rKNvLq/Screenshot-1.png') center no-repeat",
    "background-size": "cover"
  });

  const skils = css({
    "background-color": "black",
    opacity: "0.8",
    padding: "10px",
    /* width: 50%; */
    "margin-right": "auto",
    "margin-left": "auto",
    "border-radius": "10px"
  });
  const links = css({
    display: "flex",
    "flex-flow": "row wrap",
    "align-items": "center",
    "justify-content": "center"
  });
  const link = css({
    display: "flex",
    "flex-direction": "row",
    "align-items": "center",
    "justify-content": "center",
    height: "90px",
    width: "90px",
    border: "2px solid white",
    "border-radius": "100%",
    "text-align": "center",
    "font-size": "55px",
    margin: "5px",
    color: "#473be7"
  });
  return (
    <div css={mainDivCss}>
      <div css={myImgCss}></div>
      <div css={skils}>
        <h1>FULL STACK DEVELOPER</h1>
        <hr></hr>
        <p>HTML/CSS | JavaScript | React | NodeJS | Java | C | MongoDB</p>
        <div css={links} className="links">
          <a css={link} href="https://github.com/AmirAtias">
            <i className="fab fa-github" />
          </a>
          <a css={link} href="https://www.linkedin.com/in/amir-atias-a498b5156">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
