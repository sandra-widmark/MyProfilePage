import React from "react";
import { Div, Container, Text } from "atomize";
import Card from "../../components/Card";

class GithubSection extends React.Component {
  constructor(){
    super();
    this.state = {
      repos: []
    };
  
    this.getGithubData = this.getGithubData.bind(this);
  }

  componentDidMount() {
    this.getGithubData();
  }

  getGithubData() {
    fetch('https://api.github.com/users/sandra-widmark/repos')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      this.setState({repos: data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <Container d="flex" flexDir="column" justify="space-between" p={{ x: { xs: '1.5rem', md: '3rem' }, y: { xs: '1.5rem', md: '3rem' }}}>
        <Text 
            tag="h2" 
            textSize={{ xs: "title", md: "display1" }}
            textColor="darkgray"
            textWeight="900"
            m={{ b: '1rem', l: '0.5rem' }}
            >
            Github-projekt
        </Text>
        <Div d="flex" flexWrap="wrap" className="card-container">
        {this.state.repos.length === 0
          ? <Text 
            tag="h3" 
            textSize={{ xs: "body", md: "subheader" }}
            textColor="darkgray"
            textWeight="900"
            m={{ b: '1rem' }}
            >
            Laddar...
            </Text>
            : this.state.repos.map(repo => (
                <Card key={repo.name} title={repo.name} description={repo.language} link={repo.html_url}  />
            ))}
        </Div>
      </Container>
    );
  }
}

export default GithubSection;

 

