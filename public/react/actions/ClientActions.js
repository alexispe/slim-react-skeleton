import dispatcher from "../dispatcher";

export function createClient(text) {
  dispatcher.dispatch({
    type: "CREATE_CLIENT",
    text
  });
}
export function deleteClient(id) {
  dispatcher.dispatch({
    type: "DELETE_CLIENT",
    id
  });
}
export function loadClient() {
  dispatcher.dispatch({type: "FETCH_CLIENTS"});
  setTimeout(()=>{
    dispatcher.dispatch({type: "RECIEVE_CLIENTS", clients: [
      {
        id: 2144521,
        text: "Appeler intelzrezr",
        complete: false
      },
      {
        id: 874454,
        text: "Raccrochezerzerr",
        complete: false
      }
    ]});
  },1000)
}
