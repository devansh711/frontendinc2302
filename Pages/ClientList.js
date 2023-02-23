import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Sidenav } from '../Components/sidenav';
import { useEffect,useState } from 'react';
import "../styles/clientlist.css";
import { MDBIcon } from 'mdb-react-ui-kit';

export const ClientList = () => {
  const [clientsList, setClientsList] = useState([]);
  var ntokenn = "";
  useEffect(() => {

    // let token = localStorage.getItem("JWT-Token");
    // let ntoken = "Bearer " + token.replaceAll('"', '');
    // ntokenn = ntoken;

    // try {
    //   console.log("made a get call");
    //   fetch("https://localhost:7061/api/User/Get-All-Clients-for-an-advisor", {
    //     method: "GET",
    //     headers: {
    //       'Content-type': 'application/json',
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
    //       "Authorization": ntoken,
    //       "Access-Control-Max-Age": 86400
    //     }
    //   })
    //     .then(res => res.json())
    //     .then((data) => {
    //       setClientsList(data);

    //     })
    // } catch (error) {
    //   console.log("Error-> ", error);
    // }
  },[])

  const cli = clientsList.map((e,ind) =>{
    return (
      <tr>
        <td>{e.clientID}</td>
        <td>{e.firstName}</td>
        <td>{e.lastName}</td>
        <td>{e.email}</td>
      </tr>
    )
  })



  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
       <Sidenav />
      <div style={{ flex: 1, padding: '20px', overflowY: 'scroll'}}>
      <div style={{display:"flex",justifyContent:"flex-end",marginTop:"2px",marginBottom:"6px",cursor:"pointer"}}>
      <span class="signout" style={{marginRight:"2%",fontWeight:"700",backgroundColor:"#212529",color:"white",padding:"1%",borderRadius:"14px"}}>
      <center>
      <span  style={{marginRight:"10%"}}>Sign Out</span>
      <MDBIcon style={{marginLeft:"1%"}}icon="power-off" size="1.5x"/>
      </center>
    
      </span>
        
      </div>
      <center>
      <h3 style={{fontWeight:"700",marginBottom:"3%"}}>Client Details</h3>
      </center>
        

        <Table className="rounded-table" striped bordered hover >
          <thead>
            <tr>
              <th>Client ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {cli}
            <tr>
              <td>1</td>
              <td>Devansh</td>
              <td>Aggarwal</td>
              <td>devanshaggarwal711@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Shubhankar</td>
              <td>Rana</td>
              <td>shubhankarrana@gmail.com</td>
            </tr>
          </tbody>
        </Table>
        <Button className="addnewclient" style={{fontFamily:"Arial",borderRadius:"14px",backgroundColor:"#333333"}}>Add New Client</Button>
      </div>
    </div>
  );
};
