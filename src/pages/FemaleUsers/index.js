import React, { Component } from "react";
import Results from "../../components/Results";

class FemaleUsers extends Component {
  state = {
    isLoaded: false,
    results: []
  };
  componentDidMount() {
    this.renderFemale();
    }
  renderFemale = () => {
    const arr = this.props.value.filter(info => info.gender === "female");
    this.setState({
      isLoaded: true,
      results: arr
    })
  }
  render() {
    const { isLoaded, results} = this.state
    while (isLoaded === false ) {
      return <h1>Loading</h1>
    } return (
      <>
      <h1>Female Users</h1>
      <Results results={ results }/>
      </>
    )
  }
}
export default FemaleUsers