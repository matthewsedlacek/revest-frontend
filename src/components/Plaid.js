import { PlaidLink } from "react-plaid-link";
import React from "react";

const Plaid = props => {
  return (
    <PlaidLink
      clientName="Revest"
      env="sandbox"
      product={['auth', 'transactions']}
      publicKey={process.env.REACT_APP_PUBLIC_API_KEY}
      onSuccess={props.onSuccess}
    >
      <i className="fa fa-credit-card" aria-hidden="true"></i>
      <span className="d-none d-sm-none d-md-inline"> Link Your Account</span> 
    </PlaidLink>
  );
};

export default Plaid;