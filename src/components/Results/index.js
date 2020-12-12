import React from "react";
import "./style.css";
import Address from "../Address";
import Email from "../Email";
import Gender from "../Gender";
import Image from "../Image";
import Name from "../Name"
import Phone from "../Phone";
function Results(props) {
  const count1To10 = (string) => {
    let output = "";
    for(let i = 0 ;i < 10; i++ ) {
      output += string[i]
    }
    return output
  }
  const results = props.results;
  return (
    <>
      {
        results.map((result, i) => (
          <ul className="list-group" key={ result.id.value } >
            <li className="list-group-items">ID: { result.id.value }</li>
            <Image src={result.picture.large}/>
            <Name value={ result.name }/>
            <Gender gender={ result.gender }/>
            <li className="list-group-items">Birthday: <span>{ count1To10(result.dob.date) }</span></li>
            <Email email={ result.email }/>
            <Phone phone={ result.phone }/>
            <Address location={ result.location }/>
          </ul>
        ))
      }
    </>
  )
}

export default Results;