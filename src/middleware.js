import page from 'page';
import { isLoggedIn } from "./auth";


export function auth(ctx, next) {
  if (!isLoggedIn()) {
    return page.redirect('/login');
  }

  next();
}

export function guest(ctx, next) {
  if (isLoggedIn()) {
    return page.redirect('/');
  }

  next();
}