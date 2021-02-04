# Svelte Cookie Auth
**Svelte single page application (SPA) with HttpOnly cookie based authentication 🔒**

**[Leer en español](./README.es.md)**

---

This application completes a project that started with an auth api developed in Node.js (coming soon to GitHub).

As is, it can serve as a template for a SPA that uses HttpOnly cookie based auth.

## Features
- [X] logIn, register and logOut (POST requests to the auth api)
- [X] Home page (makes GET request to the auth api)
- [X] routing (with [page.js](https://github.com/visionmedia/page.js))
- [X] form validation (with [ApproveJs](https://github.com/CharlGottschalk/approvejs/))

## Screenshot (register form)
<p align="center">
  <img width="400px" src="https://user-images.githubusercontent.com/50384203/106847788-63c24f80-668e-11eb-88fe-860909c8ebeb.png" alt="screenshot" align="center">
</p>

## Objectives
1. Develop a frontend that uses the api. The application must make requests to all api endpoints.
2. Use Svelte. In that sense, the logIn and register forms are the most polished components, in order to explore the features of Svelte and other topics such as routing and client-side validation of forms.

## Notes
- the Home and NotFound pages are placeholders
- the design is not responsive 