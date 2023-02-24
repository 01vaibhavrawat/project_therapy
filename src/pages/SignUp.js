import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup_data } from "../redux/asessmentSlice";
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";
import {postAssessmentAction, resetAssessmentAction, postUserAction} from "../store/actions";
import useLocalStorage from "../shared/useLocalStorage";
import Loader from "../components/Loader";
import {useLocation} from "react-router-dom";

const SignUp = (props) => {

  let Navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState(
    {
      fullname: "",
      email: "",
      coutry: "",
      dob: "",
      pronouns: ""
    });

  const [assessment, setAssessment] = useState({
    answers: "",
    email: "",
  })

 

  const { data, loading, success } = useSelector((state)=> state.Assessment);

  const location = useLocation();
  
  const handleChange = (event) => {
     setForm((o)=>{
     return(
      {...o, [event.target.name]: event.target.value}
     ) 
     } )
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
    if(window.localStorage.getItem("rfr")){
    setForm((r)=>({...r, refer: window.localStorage.getItem("rfr")}))
  }
    if(window.localStorage.getItem("answers")){
    setAssessment((r)=>({...assessment, answers: window.localStorage.getItem("answers")}))
  }
  }, []);

  useEffect(()=>{
        if(success && (location.pathname !== "/details")) {
        Navigate("/signedup");
        }
    if(success && (location.pathname == "/details")){
        Navigate("/complete");}
        return(()=>{
          dispatch(resetAssessmentAction())
        })
  }, [success])
 // will get this from uselocalstorage

  const handleSubmit = () => {

  setAssessment((r)=>({...assessment, email: form.email}))

if(window.localStorage.getItem("answers")){
    dispatch(postAssessmentAction(assessment));
}

dispatch(postUserAction(form));

    const message = `answers: ${JSON.stringify(assessment)} ||||| signup: ${JSON.stringify(form)}`
            const templateParams = {
                message
            };
            //need to put credentials in environment variables
            emailjs.send('service_wsqyd68', 'template_aw5wtxm', templateParams, 'igzjQsnj1cF-26O7F')
                .then(response => {
                })
                .then(error => {
                  if(error){
                  window.alert('Something went wrong, please try again.');
                }
              });
  }
    

  return (

    loading ?  <Loader /> : 

    <div id="login-body">
      <div id="login-box">
        <Form inline id="login-form">
          <FormGroup>
            <Label for="exampleEmail" hidden></Label>
            <Input
              id="name"
              name='fullname'
              placeholder="Full Name"
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="exampleEmail" hidden></Label>
            <Input
              id="country"
              name="country"
              placeholder="Country Name"
              type="text"
              onChange={handleChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="exampleDate">Date of Birth</Label>
            <Input
              type="date"
              name="dob"
              id="exampleDate"
              placeholder="date placeholder"
              onChange={handleChange}
              required
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="exampleSelect">What are your pronouns?</Label>
            <Input type="select" name="pronouns" id="exampleSelect" onChange={handleChange} required>
              <option>Click to select</option>
              <option>She/her</option>
              <option>He/him</option>
              <option>They/them</option>
            </Input>
          </FormGroup>{" "}
            <Button id="login-submit" onClick={()=> {
              const arr = Object.keys(form)
              for(let x of arr){
                if(form[x] == ""){
                  var stop = true;
                }
              }
              if(false){
              window.alert('Please make sure all fields are filled in correctly.')
              }else{
              handleSubmit();
              }
            }}
              >Submit</Button>
        </Form>
      </div>
    </div>
    
  );
};

export default SignUp;
