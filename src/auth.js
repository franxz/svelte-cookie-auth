// TODO: pasar de localStorage a un endpoint /isLoggedIn y almacenamiento en memoria
//let loggedIn = false;

export function logIn() {
  localStorage.setItem("loggedIn", true);
}

export function logOut() {
  localStorage.setItem("loggedIn", false);
}

export function isLoggedIn() {
  return localStorage.getItem("loggedIn");
}