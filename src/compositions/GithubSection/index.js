import React from "react";
import { ThemeProvider, Div, Col, Row, Container, Text, Image, Button, Icon } from "atomize";
import Card from "../../components/card";

class GithubSection extends React.Component {
  constructor(){
    super();
    this.state = {
      repos: []
    };
  
    this.getGithubData = this.getGithubData.bind(this);
  }

  componentWillMount() {
    this.getGithubData();
  }

  getGithubData() {
    fetch('https://api.github.com/users/sandra-widmark/repos')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      console.log(data);
      this.setState({repos: data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <Container d="flex" flexDir="column" justify="space-between" p={{ x: { xs: '2rem', md: '3rem' }, y: { xs: '2rem', md: '3rem' }}}>
        <Text 
                tag="h2" 
                textSize="display1" 
                textColor="darkgray"
                textWeight="900"
                m={{ b: '1rem' }}
                >
                Github-projekt
        </Text>
        <Div d="flex" flexWrap="wrap" className="card-container">
        {this.state.repos.length == 0
              ? <Text 
                tag="h3" 
                textSize="title" 
                textColor="darkgray"
                textWeight="900"
                m={{ b: '1rem' }}
                >
                Laddar...
                </Text>
            : this.state.repos.map(repo => (
                <Card title={repo.name} description={repo.language} link={repo.html_url}  />
            ))}
        </Div>
      </Container>
    );
  }
}

export default GithubSection;

 

