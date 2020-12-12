import React, { Component } from "react";
import Results from "../../components/Results";

class RandomUser extends Component {
  state = {
    result: []
  };
  componentDidMount() {
    if(this.props) {
      this.renderUserInfo();
    }
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  renderUserInfo = () => {
    const arr = this.props.value
    let random = this.getRandomInt(arr.length);
    this.setState({ result: arr[random] });
  }
  render() {
    if(this.state.result.length === 0) {
      return <h1>Loading</h1>
    }
    const { result } = this.state;
    return (
      <div>
        <h1>Random User</h1>
        <Results results={ [result] }/>
      </div>
    )
  }
}

export default RandomUser;