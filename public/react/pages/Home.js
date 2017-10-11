import React from "react";

export default class Home extends React.Component {
  getUsers() {
    fetch('/user', {
      method: 'GET',
      cache: 'default'
    })
    .then(function(response) {
      console.log(response);
      return response;
    });
  }

  render() {
    this.getUsers();
    return (
      <div>
        <h1>Accueil du site!</h1>
      </div>
    );
  }
}
