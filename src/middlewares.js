import { isLoggedIn } from "./auth";

export function auth(ctx, next) {
  if (!isLoggedIn()) {
    return console.log("blocked");
  }

  next();
}

export function guest(ctx, next) {
  if (isLoggedIn()) {
    return console.log("blocked");
  }

  next();
}