export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css', // Carga el CSS de Font Awesome
    'bootstrap/dist/css/bootstrap.min.css', // Carga el CSS de Bootstrap
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false, // Renderizado del lado del servidor desactivado, solo del lado del cliente
});
