<template>
    <div class="todo">
        <!-- Menú de navegación -->
        <Menu />
        
        <!-- Imagen de encabezado -->
        <img 
            src="../assets/about/imagen1.avif" 
            alt="Imagen de portada" 
            style="width: 100vw; height: 300px; object-fit: cover; min-width:510px;"
        />

        <!-- Sección de contenido principal -->
        <section class="content">
            <div class="section-header">
                <h1>ACERCA DE......</h1>
            </div>
            <article>

                <div class="info info-1">
                    <h4>¿Quiénes somos?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus quis doloribus possimus optio. Unde perferendis distinctio soluta dolores dignissimos sit facilis vel sunt, repellat porro accusantium ad eum debitis.</p>
                    <div class="circle-1"></div>
                </div>
                <div class="img-2"></div>
            </article>

            <article>
                <div class="info info-2">
                    <h4>Misión</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus quis doloribus possimus optio. Unde perferendis distinctio soluta dolores dignissimos sit facilis vel sunt, repellat porro accusantium ad eum debitis.</p>
                    <div class="circle-2"></div>
                </div>
                <div class="img-3"></div>
            </article>

            <article>
                <div class="info info-3">
                    <div class="circle-3"></div>
                    <h4>Visión</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus quis doloribus possimus optio. Unde perferendis distinctio soluta dolores dignissimos sit facilis vel sunt, repellat porro accusantium ad eum debitis.</p>
                </div>
                <div class="img-4"></div>
            </article>
        </section>

        <!-- Pie de página -->
        <Footer />
    </div>
</template>

<style scoped>
.todo{
    min-width: 510px; /* Asegura que no se reduzca demasiado */
    color: white;
}
/* Estilo general para la sección de contenido */
.content {
    height: 100%;
    background-color: rgb(0, 170, 173); /* Fondo en tono aguamarina */
    width: 100%;
    
}

/* Estilo para el encabezado de la sección */
.section-header {
    padding: 20px 0; /* Espaciado interno */
    color: white;
    font-weight: 800;
    position: relative; /* Necesario para el pseudo-elemento */
    margin-bottom: 20px; /* Espaciado con el resto del contenido */
    width: 100%;
    margin-left: 20px;
}

/* Pseudo-elemento para la línea debajo del encabezado */
.section-header h1::after {
    content: ""; /* Necesario para que el pseudo-elemento sea visible */
    display: block; /* Convierte el pseudo-elemento en un bloque */
    width: 226px; /* Ancho de la línea */
    height: 6px; /* Grosor de la línea */
    background-color: white; /* Color de la línea */
    margin-top: 1px; /* Espaciado con el texto */
    border-radius: 10px; /* Bordes redondeados */
    margin-left: -20px;
}

article {
    max-width: 100%; /* Ancho máximo */
    margin: 0 auto; /* Centra el contenedor horizontalmente */
    padding: 40px; /* Espaciado interno */
    display: grid;
    grid-template-columns: 50% 50%; /* Dos columnas */
    gap: 10px;
    width: 100%; 
    position: relative; /* Necesario para posicionar elementos hijos absolutos */
}

.info {
    box-shadow: 5px 3px 6px black;
    padding: 20px;
    position: relative; /* Relativo para posicionar el círculo respecto a este contenedor */
    overflow: hidden;
    align-content:center ;
    height: 250px;
    width: 100%;
    min-height:250px ;
}

.info-1 {
    background: linear-gradient(to right, rgb(0, 95, 102), rgb(0, 170, 173));
    margin-top: 20px;
    margin-left: 40px;
}

.circle-1 {
    position: absolute;
    top: 50%; /* Mitad de la altura del contenedor padre */
    right: -75px; /* Posición a la izquierda del contenedor */
    transform: translateY(-50%); /* Ajusta el círculo para centrarlo verticalmente */
    width: 150px; /* Tamaño del círculo */
    height: 150px;
    background: rgb(234, 220, 25); /* Color del círculo */
    border-radius: 50%;
    z-index: 0; /* Círculo detrás del texto */
}

.info h4, .info p {
    position: relative; /* Necesario para asegurar que el texto se quede en el frente */
    z-index: 1; /* Asegura que el texto quede encima del círculo */
}

.img-2 {
    background-image: url('../assets/about/imagen2.avif');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 250px;
    box-shadow: 5px 3px 6px black;
    border-radius: 20px;
}

/* estilos del segundo articulo de acerca de */

.info-2 {
    background: rgb(215, 120, 87);
    margin-left: 40px;
    margin-top: -20px;
}

.circle-2 {
    position: absolute;
    top: 100%; /* Mitad de la altura del contenedor padre */
    right: 0; /* Posición a la izquierda del contenedor */
    transform: translateY(-50%); /* Ajusta el círculo para centrarlo verticalmente */
    width: 150px; /* Tamaño del círculo */
    height: 150px;
    background: rgba(117, 115, 115, 0.986); /* Color del círculo */
    border-radius: 50%;
    z-index: 0; /* Círculo detrás del texto */
}

.img-3 {
    background-image: url('../assets/about/imagen3.avif');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 250px;
    box-shadow: 5px 3px 6px black;
    border-radius: 20px;
}

/* estilos del tercer articulo de acerca de */

.info-3 {
    background: rgba(117, 115, 115, 0.986);
    margin-top: -20px;
    margin-left: 40px;
}

.info-3 h4{
    margin-left: 80%;
}

.img-4 {
    background-image: url('../assets/about/imagen4.avif');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 250px;
    box-shadow: 5px 3px 6px black;
    border-radius: 20px;
}

.circle-3 {
    position: absolute;
    top: 5%;
    left: 0; /* Posición a la izquierda del contenedor */
    transform: translateY(-50%); /* Ajusta el círculo para centrarlo verticalmente */
    width: 150px; /* Tamaño del círculo */
    height: 150px;
    background: rgb(215, 120, 87); /* Color del círculo */
    border-radius: 50%;
    z-index: 0; /* Círculo detrás del texto */
}


@media (max-width:770px) {
    article {
        grid-template-columns: 1fr; /* Cambia a una sola columna */
        gap: 20px; /* Espaciado más amplio */
        padding: 20px; /* Reduce el padding */

}
}
</style>