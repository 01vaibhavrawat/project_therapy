import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  CardGroup,
  CardSubtitle,
  Button,
} from "reactstrap";

import pfp from '../images/pfp2.jfif';

const About = (props) => {
  return (
    <div id="about">
      <div id="mission" className="about-box">
        <h3 id="card-title">Our Mission</h3>
        <p className="about_paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          efficitur tellus vulputate, euismod leo pulvinar, dictum nisi. Vivamus
          ut tellus in libero pharetra accumsan vel sit amet lacus. Vivamus
          dapibus dui at neque mollis, ut mollis mi dignissim. Aliquam erat
          volutpat. Fusce sit amet ex ac velit euismod sollicitudin.
        </p>
      </div>

      <div id="vision" className="about-box">
        <h3 id="card-title">Our Vision</h3>
        <p className="about_paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          efficitur tellus vulputate, euismod leo pulvinar, dictum nisi. Vivamus
          ut tellus in libero pharetra accumsan vel sit amet lacus.
        </p>
      </div>

      <div id="team" className="about-box">
        <h3 id="card-title">Our Team</h3>
        <div id="cardgroup">
          <Card className="team-card">
            <CardImg
              alt="Card image cap"
              src={pfp}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardBody>
          </Card>
          <Card className="team-card">
            <CardImg
              alt="Card image cap"
              src={pfp}
              top
              width="33%"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardBody>
          </Card>
          <Card className="team-card">
            <CardImg
              alt="Card image cap"
              src={pfp}
              top
              width="33%"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
