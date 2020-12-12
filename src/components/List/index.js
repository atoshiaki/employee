import React, { Component } from 'react'
import Results from '../Results';
export class List extends Component {
  state = {
    isLoaded: false,
    results: []
  };

  componentDidMount(props) {
    this.orderByAgeYtoO();
  }
  orderByAgeOtoY = () => {
    const arr = this.props.value.sort((a, b) => {
      const ageA = a.dob.age;
      const ageB = b.dob.age;
      return ageB - ageA;
    });
    this.setState({
      order: 'age',
      isLoaded: true,
      results: arr
    })
  }
  orderByAgeYtoO = () => {
    const arr = this.props.value.sort((a, b) => {
      const ageA = a.dob.age;
      const ageB = b.dob.age;
      return ageA - ageB;
    });
    this.setState({
      order: 'ageYtoO',
      isLoaded: true,
      results: arr
    })
  };
  render() {
    const { isLoaded, results} = this.state
    while (isLoaded === false ) {
      return <h1>Loading...</h1>
    }
    return (
      <>
        <h1>Order By Age</h1>
        <Results results={ results }/>
      </>
    )
  }
}
export default List;