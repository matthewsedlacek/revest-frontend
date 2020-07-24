import { PlaidLink } from "react-plaid-link";
import React from "react";
// import AuthHOC from '../HOCs/AuthHOC.js';

const Plaid = props => {

    return (
      <PlaidLink
        clientName="Revest"
        env="development"
        product={['auth', 'transactions']}
        publicKey={process.env.REACT_APP_PUBLIC_API_KEY}
        onSuccess={props.onSuccess}
      >
        <i className="fa fa-credit-card" aria-hidden="true"></i>
        <span className="d-none d-sm-none d-md-inline"> Connect Bank</span> 
      </PlaidLink>
    );
  };
  export default Plaid;