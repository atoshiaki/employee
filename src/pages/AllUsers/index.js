import React, {  useEffect, useState, Component } from "react";
import API from "../../utilities/API";
import FemaleUsers from "../FemaleUsers";
import MaleUsers from "../MaleUsers";
import List from "../../components/List";
import Results from "../../components/Results";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "../../components/Nav";
import RandomUsers from "../RandomUsers";
import "./style.css";

class AllUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order: "age",
      error: null,
      isLoaded: false,
      viewByGendr: null,
      results: []
    }
  }
  componentDidMount() {
    this.renderUserInfo();
  }
  renderUserInfo = () => {
    API.allUsers()
      .then(res => {
        const arr = res.data.results.sort((a, b) => {
          const idA = a.id.value[0];
          const idB = b.id.value[0];
          return idA - idB;
        });
        return this.setState({
          order: "age",
          isLoaded: true,
          results: arr
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const {isLoaded, results, order} = this.state;
    if(isLoaded === false) {
      return <div>Loading ...</div>
    } else {
      return (

        <Router>
          <NavTabs/>
          <Route exact path="/all" render={ () =>  (
            <>
            <h1>All Users</h1>
            <Results results={ results } />
            </>
          ) }/>
          <Route exact path="/male" render={ () => <MaleUsers value={ results } /> }/>
          <Route exact path="/female" render={ () => <FemaleUsers value={ results } /> }/>
          <Route exact path="/list" render={ () => <List value={ results } /> }/>
          <Route path="*" render={ () => <RandomUsers value={ results }/> }/>
        </Router>
    );
    }
  }
}
export default AllUsers