# Svelte Cookie Auth
**Aplicación de página única (SPA) desarrollada en Svelte, con autenticación basada en cookies HttpOnly 🔒**

Esta aplicación completa un proyecto que comenzó con una api de autentificación desarrollada en Node.js (próximamente en GitHub).

Tal y como está, puede servir como plantilla para una SPA que utilice autenticación basada en cookies HttpOnly.

## Características
- [X] logIn, registro y logOut (solicitudes POST a la api de autorización)
- [X] página de Home (realiza solicitud GET a la api de autorización)
- [X] routing (con [page.js](https://github.com/visionmedia/page.js))
- [X] validación de formularios (con [ApproveJs](https://github.com/CharlGottschalk/approvejs/))

## Captura de pantalla (formulario de registro)
<p align="center">
  <img width="400px" src="https://user-images.githubusercontent.com/50384203/106847788-63c24f80-668e-11eb-88fe-860909c8ebeb.png" alt="captura de pantalla" align="center">
</p>

## Objetivos
1. Desarrollar un frontend que utilice la api. La aplicación debe hacer solicitudes a todos los endpoints de la api.
2. Usar Svelte. En ese sentido, los formularios de logIn y registro son los componentes más pulidos, con el fin de explorar las características de Svelte y otros temas tales como el routing y la validación del lado del cliente de formularios.

## Notas
- las páginas de Home y NotFound son sólo placeholders
- el diseño no es responsive