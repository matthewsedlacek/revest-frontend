import React, { Component } from "react";
import { api } from "../services/api";

const AuthHOC = WrappedComponent => {
  return class AuthHOC extends Component {
    _isMounted = false;
    state = {
      authorized: false,
      user: []
    };

    componentDidMount() {
      this._isMounted = true
      this.checkLogin()
    }

    checkLogin = () => {
      if (!localStorage.getItem("token")) {
        console.log("no token")
        this.props.history.push("/login")
      } else {
        api.auth.getCurrentUser().then((resp) => {
          if (resp.error) {
            console.log("resp error")
            this.props.history.push("/login")
          }
          if (this._isMounted){
            this.setState({
              user: resp.user.data.attributes,
              authorized: true,
              
            })
          }
        });
      }
    };

    isAuthorized = () => {
      return this.state.authorized;
    };

    componentWillUnmount = () => {
      this._isMounted = false
    }

    render() {
      return (
        <div>
          {this.isAuthorized() ? (
            <WrappedComponent {...this.props} user={this.state.user} />
          ) : (
            null
          )}
        </div>
      );
    }
  };
};

export default AuthHOC;