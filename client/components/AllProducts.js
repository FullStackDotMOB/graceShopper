import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/product';
import { Link } from 'react-router-dom';
import { addToCart, addItemsToCart } from '../store/cart';

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
    //if it finds this
    const { addToCart, addedProducts } = this.props;

    return (
      <div>
        <h2>Welcome to Our Products Page!</h2>
        <div>
          {this.props.allProducts.map((product) => (
            <div id="grid-item" key={product.id}>
              <div id="grid-item">
                <div>
                  <Link to={`products/${product.id}`}>
                    <h3>{product.name}</h3>
                  </Link>
                </div>
                <div>
                  <Link to={`products/${product.id}`}>
                    <h3>
                      <img src={product.imageUrl} />
                    </h3>
                  </Link>
                </div>
                <h3>${product.price / 100}</h3>
                <p>#{product.SKU}</p>
              </div>
              {addToCart ? (
                <button
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  <label>Add to Cart</label>
                </button>
              ) : (
                <button
                  onClick={() => {
                    addProductToCart();
                  }}
                >
                  <label>Add to Cart</label>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return state.products;
};
const mapDispatch = (dispatch) => {
  return {
    addToCart: (addedProducts) => dispatch(addToCart(addedProducts)),
    loadProducts: () => dispatch(fetchProducts()),
    addProductToCart: (userId, productId) =>
      dispatch(addProductToCart(userId, productId)),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);

//Testing Merge Conflict Solution
