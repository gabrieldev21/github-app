"use strict";

import React, { Component } from "react";

import AppContent from "./components/app-content";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: {
        username: "Fernando Daciuk",
        photo: "https://avatars.githubusercontent.com/u/487669?v=4",
        login: "fdaciuk",
        repos: 122,
        followers: 10,
        following: 10,
      },
      repos: [{ name: "Repo", link: "#" }],
      starred: [{ name: "Repo", link: "#" }],
    };
  }

  handleSearch(e) {
      const value = e.target.value;
      const keyCode = e.which || e.keyCode;
      const ENTER = 13;

      if (keyCode === ENTER) {
        ajax()
        .get(`https://api.github.com/users/${value}`)
        .then((result) => {
          console.log(result);
        });
      }
    }
  }

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
      />
    );
  }
}

export default App;
