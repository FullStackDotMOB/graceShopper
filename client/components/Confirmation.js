import React from 'react';
import { connect } from 'react-redux';

const Confirmation = (props) => {
  const { username } = props;

  return (
    <h1>
      Thank you for shopping with us, {username}! Your order has been placed and
      you will receive a confirmation email shortly!
    </h1>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Confirmation);
