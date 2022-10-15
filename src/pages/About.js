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
        <h3 id="card-title">About Us</h3>
        <p className="about_paragraph">
           We are an aspiring organization working in the field of mental health, 
           we believe that one has to walk the path of healing by themselves, 
           but they don't have to be alone in it, we provide support and resources.
        </p>
      </div>

      <div id="mission" className="about-box">
        <h3 id="card-title">Our Mission</h3>
        <p className="about_paragraph">
          We are determined to spread awareness about mental health issues and help people live happy lives. 
          We are creating resources for people to understand their particular disorders and the process of healing.
        </p>
      </div>

      <div id="vision" className="about-box">
        <h3 id="card-title">Our Vision</h3>
        <p className="about_paragraph">Our vision is to change people's perception of mental health
          and provide a supportive environment for people who are suffering from it.
          We want to see a world where diagnosis and treatment of mental health are convenient for everyone.  
        </p>
      </div>

      {/*<div id="team" className="about-box">
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
      </div>*/} 
    </div>
  );
};

export default About;
