import React from 'react';
import Gift from './Gift';

class List extends React.Component {
  render() {
    return (
      <>
      <h2>Shopping List</h2>
      <Gift name="Mogwai Poster" description="Mogwai announce 2023 tour dates Poster" price="$12.76" /> 
      <Gift name="2"/>
      </>
    )
  }
}
export default List;