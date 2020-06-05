import React, { Component } from "react";
import Login from "./Login";
// import firebase from "firebase";
import { firebase } from "../services/firebase";

class UserInfor extends Component {
  state = {
    email: "",
    displayName: "",
    img:""
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandle({ user });
        console.log("logindfsjdgfsdhjkfdghkjjk");
      }
    });
  }

  //xác thực bằng provider
  authenticate = () => {
    console.log("aaaaaaaaaaaaaaaaaa");
    const authProvider = new firebase.auth.FacebookAuthProvider();
    console.log("authProvider", authProvider);
    authProvider.addScope("email");
    firebase
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandle)
      .catch(function (error) {
        console.log(error);
        
      });
  };

  //handle sau khi xác thực
  authHandle = (authData) => {
    const user = authData.user;
    console.log("data", user);
    this.setState({
      email: user.email,
      displayName: user.displayName,
      img: user.photoURL
    });
  };

  logout = async () => {
    console.log("logout");
    await firebase.auth().signOut();
    this.setState({ email: null, name: null });
  };

  render() {
    const logout = <button onClick={this.logout}>Log Out</button>;
    if (!this.state.email) {
      return (
        <Login
          authenticate={this.authenticate}
          provider={new firebase.auth.FacebookAuthProvider()}
        />
      );
    } else {
      return (
        <div>
          <div>
          <label>User name</label>
          <span type="text">
            {this.state.displayName}
          </span>
          </div>
          <div>
          <label>Email</label>
          <span type="text">
            {this.state.email}
          </span>
          <img src={this.state.img} alt="avatar"/>
          <div>{logout}</div>
          </div>
          
        </div>
      );
    }
  }
}

export default UserInfor;
