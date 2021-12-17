import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../store/singleProduct';

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  render() {
    console.log(this.props.storedProduct);

    // Orlando: you can destructure this for more readability
    return (
      <div>
        <ul>
          <div>
            <h1>{this.props.storedProduct.name}</h1>
            <img src={this.props.storedProduct.imageUrl} />
            <h2>${this.props.storedProduct.price / 100}</h2>
            <p>{this.props.storedProduct.description}</p>
            <div>
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
          </div>
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return state.product;
};

const mapDispatch = (dispatch) => {
  return {
    fetchProduct: (singleProduct) => dispatch(fetchProduct(singleProduct)),
    addProductToCart: (userId, productId) =>
      dispatch(addProductToCart(userId, productId)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
