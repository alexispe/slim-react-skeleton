import React from "react";

import * as ClientActions from "../actions/ClientActions";
import ClientStore from "../stores/ClientStore";

export default class Home extends React.Component {
  constructor() {
    super();
    this.getClients = this.getClients.bind(this);
    this.state = { clients: ClientStore.getAll() };
  }

  componentWillMount() {
    ClientStore.on("change", this.getTodos);
  }
  componentWillUnmount() {
    ClientStore.removeListener("change", this.getTodos);
  }

  getClients() { this.setState({ clients: ClientStore.getAll() }); }
  loadClient() { ClientActions.loadClient(); }

  render() {
    const {clients} = this.state;
    const ClientComponents = clients.map((client)=>{
      return <li>{client.text}</li>
    })
    return (
      <div>
        <button onClick={this.loadClient.bind(this)}>charger</button>
        <h1>Accueil du site!</h1>
        <ul>{ClientComponents}</ul>
      </div>
    );
  }
}
