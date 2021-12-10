import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../store/singleProduct';

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  render() {
    console.log(this.props.storedProduct);
    return (
      //   <h1>This is Single Product Page</h1>
      <div>
        <ul>
          <div>
            <h1>{this.props.storedProduct.name}</h1>
            <img src={this.props.storedProduct.imgUrl} />
            <h2>${this.props.storedProduct.price / 100}</h2>
          </div>
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return state.singleProduct;
};

const mapDispatch = (dispatch) => {
  return {
    fetchProduct: (singleProduct) => dispatch(fetchProduct(singleProduct)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
