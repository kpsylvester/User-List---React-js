import React, { Component } from "react";
import "./App.css";
import FetchRandomUser from "./components/FetchRandomUser";
import PhoneUser from "./components/PhoneUser";
import { Container, Row, Col} from 'reactstrap';



class App extends Component {
  state = {
    visible: true
  };
  render() {
    return (
      <div className="App">
         <h1>User List</h1>
       <Container>
       <Row xs="2">
       <Col> <FetchRandomUser /></Col>
        <Col>    <PhoneUser /></Col>
         </Row>
       </Container>
      </div>
    );
  }
}

export default App;