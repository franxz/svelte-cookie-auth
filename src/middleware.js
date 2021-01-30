import { isLoggedIn } from "./auth";
import page from 'page';

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