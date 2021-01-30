let loggedIn = false;

export function logIn() {
  loggedIn = true;
}

export function logOut() {
  loggedIn = false;
}

export function isLoggedIn() {
  return loggedIn;
}