import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    // const Products = this.props.loadProducts;
    // console.log('product', Products);
    return (
      <div>
        <h2>Welcome to Our Products Page!</h2>
        {this.props.allProducts.map((product) => (
          <div key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <h3>{product.price}</h3>
              <h3>
                <img src={product.imageUrl} />
              </h3>
              <h3>{product.SKU}</h3>
            </div>
          </div>
        ))}
        );
      </div>
    );
  }
}

const mapState = (state) => {
  return state.products;
};
const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
