/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Grid } from "semantic-ui-react";

const Contact = () => {
  const mainDiv = css({
    display: "flex",
    "flex-flow": "column wrap",
    "justify-content": "center",
    "align-items": "center"
    //height: "90%",
  });
  const backgroundImage = css({
    display: "flex",
    "flex-flow": "column wrap",
    "justify-content": "center",
    "align-items": "center"
  });
  const title = css({
    color: "black",
    "font-family": "'Oswald', sans-serif"
  });
  //style={{ textAlign: "bottom", padding: "2%" }}
  const list = css({
    display: "flex",
    "flex-flow": "row wrap",
    "justify-content": "center",
    "align-items": "center",
    margin: "0 auto",
    //paddingLeft: " 0",
    paddingTop: "5%",
    marginLeft: "5%"
  });

  const links = css({
    display: "flex",
    "flex-flow": "row wrap",
    "align-items": "center"
    //"justify-content": "center"
  });
  const link = css({
    display: "flex",
    "flex-direction": "row",
    "align-items": "center",
    "justify-content": "center",
    height: "40px",
    width: "40px",
    //border: "2px solid black",
    "border-radius": "100%",
    //"text-align": "center",
    "font-size": "55px",
    marginRight: "20px",
    color: "black"
  });
  return (
    <div css={backgroundImage}>
      <div css={mainDiv}>
        <Grid css={list} columns={2}>
          <Grid.Row>
            <Grid.Column>
              <h2
                style={{
                  marginLeft: "1%",
                  fontSize: "25px",
                  marginTop: "3%"
                }}
              >
                Contact Me
              </h2>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <p>
                <i className="fa fa-phone fa-3x"></i>
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                052 - 6868144
              </p>
            </Grid.Column>
            <Grid.Column>
              <p>
                <i className="fa fa-envelope fa-3x"></i>
              </p>
              <p>
                <strong>E-mail:</strong>
                <br />
                amiratias505@gmail.com
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h2 css={title}>CURRENT LOCATION:</h2>
              <h5 css={title}>Holon, Israel</h5>

              <iframe
                title="This is a unique title"
                width="300"
                height="200"
                frameBorder="0"
                //style="border:0"
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOb8zDLu0AhURLeclBWR53fs&key=AIzaSyByIxpZ9ED7mzsW4UzYznZBeAya8XhjAbg"
                allowFullscreen
              ></iframe>
            </Grid.Column>
            <Grid.Column>
              <h5 css={title}>FIND ME ON:</h5>
              <div css={links} className="links">
                <a css={link} href="https://github.com/AmirAtias">
                  <i className="fab fa-github" />
                </a>
                <a
                  css={link}
                  href="https://www.linkedin.com/in/amir-atias-a498b5156"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};
export default Contact;
