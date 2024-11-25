import { NuxtLink } from '../.nuxt/components';
<template>
  <div class="background">
    <button type="button" @click="click" class="cta-button">
      <NuxtLink to="/home" class="link">Ver Más</NuxtLink>
    </button>
  </div>
</template>

<style scoped>
.background {
  width: 100vw; /* Ancho total del viewport */
  height: 100vh; /* Alto total del viewport */
  background-image: url("@/assets/welcome.jpeg");
  background-size: cover; /* Asegura que la imagen cubra todo el área */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que se repita */
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: flex-end; /* Coloca el contenido al final */
  padding-bottom: 100px; /* Espacio entre el botón y el borde inferior */
}

.cta-button {
  height: 50px;
  width: 150px;
  border-radius: 25px;
  background-color: rgb(18, 194, 197); /* Color del botón */
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none; /* Elimina el borde predeterminado */
  cursor: pointer;
  transition: all 0.3s ease; /* Animación suave al interactuar */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Sombra para un efecto de profundidad */
}

.cta-button:hover {
  background-color: rgb(0, 163, 167); /* Cambia de color al pasar el mouse */
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.4); /* Aumenta la sombra al pasar el mouse */
  transform: scale(1.05); /* Agranda ligeramente el botón */
}

.link{
  text-decoration: none;
  color: white;
}

</style>
