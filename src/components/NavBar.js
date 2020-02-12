/** @jsx jsx */

import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/core";

const NavBar = () => {
  const headerCss = css({
    display: "flex",
    color: "white",
    background: "black",
    "justify-content": "space-around",
    "font-family": "'ZCOOL QingKe HuangYou', cursive",
    "font-size": "large",
    //"margin-right": " -3%",
    "margin-left": "-5%"
  });
  const buttonsCss = css({
    display: "flex",
    color: "white",
    "flex-flow": "row wrap",
    "align-items": "center",
    padding: "5px"
  });
  const nameCss = css({
    display: "flex",
    color: "white",
    "flex-flow": "row wrap",
    "align-items": "center",
    "font-size": "x-large	"
  });

  return (
    <nav css={headerCss}>
      <Link to="/" css={nameCss}>
        Amir Atias
      </Link>
      <div css={buttonsCss}>
        <Link css={buttonsCss} to="/resume">
          resume
        </Link>
        <Link css={buttonsCss} to="/projects">
          projects
        </Link>
        <Link css={buttonsCss} to="/aboutme">
          about me
        </Link>
        <Link css={buttonsCss} to="/contact">
          contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
