/** @type {import('tailwindcss').Config} */
export const content = [
  './django_allauth/**/*.html',
  './django_allauth/templates/**/*.html',  // Ruta corregida para apuntar a los templates
  './django_allauth/static/**/*.js',       // Si tienes JavaScript personalizado que usa clases de Tailwind
  './django_allauth/static/**/*.css', 
  //aqui se añaden las rutas de los templates a utilizar
];
export const theme = {
  extend: {},
};
export const plugins = [];

