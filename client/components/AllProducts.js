import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/product';

export class AllProducts extends Component {
  componentDidMount() {
    try {
      this.props.loadProducts();
    } catch (error) {
      console.log('error inside component AllProducts ', error);
    }
  }
  render() {
    const Products = this.props.loadProducts;
    console.log('product', Products);
    return (
      <>
        <h2>Welcome to Our Products Page!</h2>
        <div>{Products[0]}</div>
      </>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(null, mapDispatch)(AllProducts);
