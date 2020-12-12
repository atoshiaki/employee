import React from 'react';
function Address({location}) {
  const { number, name } = location.street;
  const { city, state } = location;
  return <li className='list-group-items'>Address: { number } { name }</li>
}
export default Address;