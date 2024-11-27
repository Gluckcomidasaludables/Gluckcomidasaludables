import { NuxtLink } from '../.nuxt/components';
<template>
    <div class="content">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#"></a>
            <button
                class="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <!-- Usa NuxtLink para rutas internas -->
                    <li class="nav-item active">
                        <NuxtLink class="nav-link" to="/home">HOME <span class="sr-only">(current)</span></NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/about">ACERCA DE</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/menuComida">MENÚ</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/contacto">CONTACTO</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <i class="fa-solid fa-cart-shopping social-icon"></i>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.content{
    overflow:hidden;
}

/* Estilo para el navbar */
nav {
    background-color: rgb(251, 231, 93); /* Color de fondo */
}

#navbarNav{
    padding: 0 20px 0 0;
}

ul{
    gap: 20px;
}

/* Aplica negrita a todos los enlaces del navbar */
.nav-link {
    font-weight: 700; /* Negrita */
    color: black; /* Color negro para mayor contraste */
    cursor: pointer;
}

/* Opcional: Cambiar color al pasar el mouse */
.nav-link:hover {
    color: rgb(0, 170, 173); /* Cambia de color al pasar el mouse */
}

.social-icon {
    margin-top: 10px;
    font-size: 20px;
    text-decoration: none;
    transition: color 0.3s;
}

.social-icon:hover {
    color: rgb(96, 217, 219);
}

</style>
