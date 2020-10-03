import React from "react";
import styled from 'styled-components';
import { device } from "./device";

const Background = styled.div`

@media ${device.mobileS} {
    font-size: 13px;
  }
`;


export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    persons: null
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(JSON.stringify(myJson));
      //First check what type of data you are getting here and then try to set your state as below.
      this.setState({persons:myJson, loading:false});
    })
    .catch(error => console.error(error)); //If error occurs you will get here
  }
    

  
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.persons) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
          {this.state.persons.map(person => {
              return(
                  <>
                  <Background>
                   <div>{person.id}</div>
                   <div>{person.name}</div>
                   <div>{person.username}</div>
                   <div>{person.email}</div>
                   <div>{person.address.street}</div>
                   <div>{person.address.suite}</div>
                   <div>{person.address.city}</div>
                   <div>{person.address.zipcode}</div>
                   <div>{person.address.geo.lat}</div>
                   <div>{person.address.geo.long}</div>
                   </Background>
                   
                   </>
              );
          })}
      </div>
    );
  }
}