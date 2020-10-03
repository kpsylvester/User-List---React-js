import React from "react";
import styled from 'styled-components';
import { device } from "./device";

const Space = styled.div`

padding-top: 25px;
padding-bottom: 20px;

@media ${device.mobileXs} {
  padding-top: 15px;
  padding-bottom: 15px;
  
}

@media ${device.mobileS} {
  padding-top: 20px;
  padding-bottom: 12px;
  font-size: 13px;
}

@media ${device.mobileM} {
  padding-top: 20px;
  padding-bottom: 25px;
}

@media ${device.mobileL} {
  padding-top: 30px;
  padding-bottom: 30px;
}

@media ${device.mobileXl} {
  padding-top: 40px;
  padding-bottom: 40px;
}

@media ${device.tablet} {
  padding-top: 45px;
  padding-bottom: 45px;
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
              <Space>
                   <div>{person.phone}</div>
                   <div>{person.website}</div>
                   <div>{person.company.name}</div>
                   <div>{person.company.catchPhrase}</div>
                   <div>{person.company.bs}</div>
              </Space>    
                   </>
              );
          })}
      </div>
    );
  }
}