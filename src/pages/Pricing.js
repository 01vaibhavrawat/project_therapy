import {
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    Button,
    ListGroupItem,
    ListGroup,
     } from 'reactstrap';

export default function Pricing() {

  const text = [
  {
    title: "Free to get started",
    text: "The assessments, daily tasks and resources for self help.",
    button: "Go somewhere",
    arr : [
    "Daily tasks",
    "Self-help resources",
    "Assessments",
    "Connect with other members",
    ]
  },
  {
    title: "$79 per member /month",
    text: "A custom plan with services tailored to individual requirements.",
    button: "Go somewhere",
    arr : [
    "24×7×365 sessions with guides",
    "Consultation sessions with professional therapists",
    "Daily tasks",
    "Self-help resources",
    "Assessments",
    "Connect with other members",
    ]
  }]


  return(
    <div id="pricing-div">
    <h1 id="pricing-header">Pricing</h1>
    <Row id="pricing">

     {text.map((obj, index)=>{
       return(
        <Col id="pricing-col" sm="6" key={index}>
          <Card body>
            <CardTitle tag="h5">
              {obj.title}
            </CardTitle>
            <CardText>
              {obj.text}
            </CardText>
            <Button className="pricing-button" color="primary">
              {obj.button}
            </Button>
            <ListGroup flush>
             { obj.arr.map((item, index)=>{
                return(
              <ListGroupItem id="pricing-icon-text" key={index}>
                <img className="check" src={require('../images/check.png')}/>
                <p>{item}</p>
              </ListGroupItem>
              )
              })
            }
            </ListGroup>
          </Card>
        </Col>

        )
    })}
      </Row>
      </div>
    )
}