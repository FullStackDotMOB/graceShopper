import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class AllProducts extends Component {
  // componentDidMount() {
  //   try {
  //     this.props.//Allproject();
  //   } catch (error) {
  //     console.log("error inside component getProjects ", error);
  //   }
  // }
  render() {
    return (
      <>
        <h2>Welcome to Our Products Page!</h2>
        <div>
          {this.props.blank.map((SingleItem) => (
            <div key={SingleProduct.id}>
              <Link>{/* <SingleProduct SingleProduct{blank} */}</Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}
