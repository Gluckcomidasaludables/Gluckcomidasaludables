import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gluck.nuxt', // Cambia esto por tu ID de paquete
  appName: 'Gluck',        // Nombre de tu app
  webDir: 'dist',          // Carpeta generada por Nuxt
  bundledWebRuntime: false,
  server: {
    url: 'https://gluckcomidasaludables.vercel.app', // URL de producción
    cleartext: true, // Asegúrate de que esté activado si es necesario
  },
};

export default config;
