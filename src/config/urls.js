export const authApi = { base: 'http://localhost:3000' }
  authApi.home =        `${authApi.base}/home`
  authApi.logIn =       `${authApi.base}/login`
  authApi.logOut =      `${authApi.base}/logout`
  authApi.isLoggedIn =  `${authApi.base}/isloggedin`
  authApi.register =    `${authApi.base}/register`