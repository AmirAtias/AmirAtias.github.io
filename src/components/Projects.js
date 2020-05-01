/** @jsx jsx */
import { useContext } from "react";
import UserContext from "./UserContext";
import { css, jsx } from "@emotion/core";
import ReactTooltip from "react-tooltip";
const backgroundCss = css({
  background:
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwY3jOOTGXMMS3YYcmjULumtsYmANpesAQDpCScTeVfBXHtv5M&usqp=CAU) no-repeat center center fixed",
  "-webkit-background-size": "cover",
  "-moz-background-size": " cover",
  " -o-background-size": "cover",
  "background-size": "cover",
  color: "white",
  "font-weight": "bold",
  display: "flex"
});
const title = css({
  display: "flex",
  "flex-flow": "column wrap",
  "justify-content": "center",
  "align-items": "center",
  color: "white",
  "font-family": "'Oswald', sans-serif"
});
const mainDiv = css({
  display: "flex",
  "flex-flow": "column wrap",
  width: "70%",
  height: "90%",
  padding: "1px",
  margin: "7px"
});
const cardCss = css({
  margin: "7px",
  "padding-right": "5px",
  "padding-left": "5px",
  display: "flex",
  border: "1px solid white",
  "flex-flow": "column wrap",
  "padding-inline-start": "10px"
});
const primaryLanguageCss = css({
  display: "flex",
  "justify-content": "flex-end",
  "font-size": "small"
});
const nameContainer = css({
  display: "flex",
  "flex-flow": "row wrap",
  "font-size": "Large"
});
const projectTitle = css({
  "margin-right": "5px",
  "font-family": "'Oswald', sans-serif",
  "padding-top": "-5px"
});
const langCSS = css({
  "border-radius": "3px",
  "background-color": "#e0edf5",
  color: "#366193",
  float: "left",
  padding: "6px 8px",
  "margin-right": "8px",
  "margin-bottom": "6px",
  "font-weight": "400",
  "font-size": "small"
});
const langList = css({
  "list-style-type": "none",
  "padding-inline-start": "2px"
});
const icon = css({
  "padding-top": "5px"
});

const Projects = () => {
  const user = useContext(UserContext);
  return (
    <div css={backgroundCss}>
      <div css={mainDiv}>
        <ReactTooltip place="right" />
        <h1 css={title}>My Projects </h1>
        <ul>
          {user.projects.map((project, i) => (
            <li css={cardCss} Key={i}>
              <span css={primaryLanguageCss}>{project.primaryLanguage}</span>
              <div css={nameContainer}>
                <p css={projectTitle}>{project.displayName}</p>
                <a
                  data-tip="GitHub Repo"
                  data-type="info"
                  href={project.githubUrl}
                >
                  <i css={icon} className="fab fa-github" />
                </a>
              </div>
              <div>
                <p>{project.summary}</p>
                <hr />
                <ul css={langList}>
                  {project.languages.map((language, j) => (
                    <li css={langCSS} key={j}>
                      <span>{language}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Projects;
