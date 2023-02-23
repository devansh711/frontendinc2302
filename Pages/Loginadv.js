import React, { useState } from "react";
import { Footer } from "../Components/footer";
import { Navbarr } from "../Components/navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Logininvs.css";
import {Dashboardadv} from "./Dashboardadv"

export const Loginadv = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ForgotPassword = ()=>{

  }
  const SignIn = (e) => {
    e.preventDefault();
    let values = {
      "email": email,
      "password": password,
    };

    try {
      fetch("https://localhost:7061/api/User/AdvisorLogin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Access-Control-Max-Age": 86400,
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          
          if(res.status==200){
            window.location='/dashboardadv';
            return res.text();
            }
            return res.text();
          
          })
        .then((data) => {
          localStorage.setItem("JWT-Token", JSON.stringify(data));
        });
    } catch (error) {
      console.log("Error-> ", error);
    }
  };

  return (
    <>
      <Navbarr />
      <div style={{backgroundColor:"#FAFAFD"}}><center>
      <div className="wholeLoginadvPage" style={{marginTop:"6%"}}>
        <Form style={{borderRadius:"20px",boxShadow:"6px 6px 4px rgba(0, 0, 0, 0.2)"}} className="signInForm" id="signInForm" >
          <center>
            <img
            style={{width:"15%",height:"15%"}}
              className="logoimg"
              src={require("../Images/logo.png")}
              alt="logo"
            />
            <span style={{fontWeight:"700",fontSize:"120%"}}> Sign In</span>
            <p>Enter details to login into your<b> Advisor</b> account</p>
            <hr></hr>
          </center>
          
          
          <Form.Group className="mb-3" controlId="formBasicEmail1" md="true">
            
            <Form.Control placeholder="Enter your email-id" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" md="true">
            
            <Form.Control
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </Form.Group>
          <Button style={{fontSize:"75%",marginTop:"2%",marginLeft:"72%"}}onClick={ForgotPassword} variant="link" size="sm" id="abc" href="/forgetPassword">
            Forgot Password?
          </Button>
<center><Button style={{fontFamily:"Arial",borderRadius:"14px",width:"50%",borderTop:"0px"}} onClick={SignIn} variant="primary" type="submit">
            Sign In
          </Button></center>
          

          
        </Form>
      </div>
      </center></div>
      
      <Footer />
    </>
  );
};
