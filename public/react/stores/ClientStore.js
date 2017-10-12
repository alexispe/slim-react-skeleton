import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ClientStore extends EventEmitter {
  constructor() {
    super();
    this.clients = [];
  }

  create(text) {
    const id = Date.now();
    this.clients.push({
      id,
      text,
      complete: false
    });
    this.emit("change");
  }

  getAll() {
    return this.clients;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_CLIENT": {
        this.create(action.text);
      }
      case "RECIEVE_CLIENTS": {
        this.clients = action.clients;
        this.emit("change");
      }
    }
  }
}

const clientStore = new ClientStore;
dispatcher.register(clientStore.handleActions.bind(clientStore));

export default clientStore;
