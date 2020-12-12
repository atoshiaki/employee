import React, { Component } from "react";
import Results from "../../components/Results";

class MaleUsers extends Component {
  state = {
    isLoaded: false,
    results: []
  };
  componentDidMount() {
    if(this.props) {
      this.renderFemale();
    }
  }
  renderFemale = () => {
    const arr = this.props.value.filter(info => info.gender === "male");
    this.setState({
      isLoaded: true,
      results: arr
    })
  }
  render() {
    const { isLoaded, results} = this.state
    while (isLoaded === false ) {
      return <h1>Loading</h1>
    }
    return (
      <>
      <h1>Male Users</h1>
      <Results results={ results }/>
      </>
    )
  }
}
export default MaleUsers