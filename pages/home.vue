<template>
    <div class="content">
        <Busqueda />
        
        <div class="spacer"></div>
        <div class="spacer"></div>

        <main class="grid-container">
            <!-- Imagen grande -->
            <article class="large-content">
                <div class="info">
                    <h2>BUSCANDO QUÉ <br> ALMORZAR?</h2>
                    <p>¡Comienza hoy mismo a disfrutar de <br>
                        comidas nutritivas y sabrosas, hechas a tu <br>
                        medida!
                    </p>
                    <button>EXPLORA</button>
                </div>

                <div class="plato">
                    <img src="../assets/home/main/plato.png" alt="">
                    <div></div>
                </div>

                <!-- circle-->
                <div class="circle"></div>
            </article>

            <!-- Imagen pequeña superior -->
            <article class="small-image">
                <div class="plato plato2">
                    <div>VER PRODUCTO</div>
                    <img src="../assets/home/main/plato2.png" alt="">
                </div>
                <div class="plato plato3">
                    <div>VER PRODUCTO</div>
                    <img src="../assets/home/main/plato2.png" alt="">
                </div>
            </article>
        </main>

        <section class="content-2">
            <article class="article-1" >
                <h4> TU MENÚ <br>
                    SALUDABLE <br>
                    PARA TUS OBJETIVOS
                </h4>
                <div class="beneficios">
                    <p>Perdida de Grasa</p>
                    <p>Aumento de <br>
                        Masa Muscular
                    </p>
                </div>
            </article>
            <article class="article-2"> 
                <div class="titulo">
                    <h4>RECOMENDADOS</h4>
                </div>
                <div class="platillos">
                    <article >
                        <p>
                            Bowl Oriental <br>
                            $xxxx
                        </p>
                    </article>
                    <article >
                        <p>
                            Fresh and Chicken <br>
                            $xxxx
                        </p>
                    </article>
                    <article >
                        <p>
                            Salmon Roll <br>
                            $xxxx
                        </p>
                    </article>
                    <article >
                        <p>
                            Pollo Carmesi <br>
                            $xxxx
                        </p>
                    </article>
                </div>
            </article>
            <article class="article-3">
                <p style="padding: 0 10px 0 10px;">"Transforma tu comida en una experiencia saludable : disfruta de platos <br>
                nutritivos que no solo saben increible, sino que tambien te hacen sentir increible. " 
                </p>
            </article>

        </section>

        <section class="content-3">
            <article class="campo-1">
                <h4>RECOMENDADOS PARA TU <br>
                CAMBIO DE
                </h4>
            </article>
            <article class="campo">
                <div class="logo">
                    <img src="../assets/home/seccion3/short.png" alt="">
                    <p>Fitia</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia iure vitae obcaecati quidem voluptatum, corporis adipisci natus laudantium ipsum, autem animi vel numquam accusantium magnam vero? Consectetur, amet error!
                    bus aliquid veniam reprehenderit ea porro reiciendis? Ab, blanditiis?</p>
                </div>
            </article>

            <article class="campo">
                <div class="logo-NTC">
                    <img src="../assets/home/seccion3/chulo.png" alt="" style="margin-left: 30px;">
                    <p style="margin-left: 30px;">NTC</p>
                </div>  
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia iure vitae obcaecati quidem voluptatum, corporis adipisci natus laudantium ipsum, autem animi vel numquam accusantium magnam vero? Consectetur, amet error!
                    bus aliquid veniam reprehenderit ea porro reiciendis? Ab, blanditiis?</p>
                </div>
            </article>
        </section>

        <Footer />
    </div>
</template>

<style scoped>
.content {
    height: 100%;
    background-color: rgb(0, 170, 173); 
    width: 100%;
}

/* Clase para el espaciador */
.spacer {
    width: 100%; /* Ocupa todo el ancho */
    height: 20px; /* Ajusta la altura del espacio */
}

/* Contenedor principal para el grid */
.grid-container {
    margin: 0 auto; /* Centra el contenedor horizontalmente */
    padding: 40px; /* Espaciado interno */
    display: grid;
    grid-template-columns: 70% 30%; /* Dos columnas */
    gap: 10px;
    width: 100%; /* Asegura que ocupe todo el ancho disponible */
}


/* Imagen grande */
.large-content {
    position: relative;
    display: flex;
    background: linear-gradient(to right, rgb(0, 95, 102), rgb(0, 170, 173));
    padding: 20px;
    align-items: center;
    color: white;
    box-shadow: 2px 2px 5px white;
    overflow: hidden; /* Esconde cualquier contenido que sobresalga */
    margin: 0 auto; /* Centra el contenido horizontalmente */
    width: 100%; /* Ocupa todo el ancho posible */
    height: 100%;
}

.large-content .info{
    width: 100%;
}

.large-content .info h2{
    font-weight: 800;
}

.large-content .info button{
    margin-left: 85px;
    background-color: rgb(234, 65, 25);
    border-radius: 40px;
    color: white;
    font-weight: 800;
    padding:0 10px 0 10px ;   

}

.large-content .plato{
    display: flex;
    justify-content: center;
    align-items: center;
}

.large-content .plato img{
    height: 180px;
    margin-left: 50px;
    z-index: 10;
    
}

.large-content .circle {
    position: absolute;
    top: 50%;
    right: -150px; /* Ajusta el valor según el tamaño deseado */
    transform: translateY(-50%);
    width: 300px; /* Tamaño del círculo */
    height: 300px;
    background: rgb(234, 220, 25); /* Color del círculo */
    border-radius: 50%;
    z-index: 1;
}

.small-image {
    display: flex;
    flex-direction: column; /* Alinea los elementos en columna */
    gap: 20px; /* Espaciado entre los elementos */
    align-items: center;

}

.small-image .plato {
    
    display: flex;
    justify-content: center; /* Centra verticalmente */
    align-items: center; /* Centra horizontalmente */
    text-align: center; /* Centra el texto */
    height: 200px;
    width: 400px;
}

.small-image .plato2{
    background: rgb(234, 65, 25); 
}

.small-image .plato3{
    background: rgb(104, 101, 100); 
}

.small-image .plato div {
    background-color: aqua;
    width: fit-content; /* Ajusta al tamaño del texto */
    padding: 5px 10px; /* Espaciado interno */
    border-radius: 4px;
    font-size: 12px; /* Tamaño del texto */
    font-weight: bold;
    margin-left: 10px;
    cursor: pointer;
}

.small-image .plato img {
    width: 60%; /* Tamaño ajustado para las imágenes */
    height: auto; /* Mantén la proporción de la imagen */
    border-radius: 8px; /* Opcional: bordes redondeados */
}
/* estilos para el segundo contenedor */
.content-2{
    background-image: url('../assets/home/seccion2/fondo.jpg');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 40px 0 0 0;
}

.article-1{
    width: 350px;
    height: 100%;
    background-color: white;
    margin: 40px 0 50px 0;
    padding: 20px;
    border-radius: 40px;
    text-align: center;
    margin:  0 auto;
    margin-bottom: 50px;
}

.beneficios{
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 20px;
}

h4{
    font-weight: 800;
    color: gray;
}

.beneficios p{
    align-content: center;
    background-color: rgb(215, 120, 87);
    border-radius: 10px;
    padding: 0 10px 0 10px;
    color: white;
    font-weight: 700; /* Negrita */
}

.article-2{
    background-color: white;
    padding: 10px 0;
}

.article-2 .titulo h4{
    color: rgb(215, 120, 87);
    font-weight: 800;
    position: relative; /* Necesario para posicionar el pseudo-elemento */
    margin-bottom: 20px; /* Espacio para la línea */
    width: 300px;
    margin-left: 20px;
}

.article-2 .titulo h4::after {
    content: ""; /* Necesario para que el pseudo-elemento sea visible */
    display: block; /* Convierte el pseudo-elemento en un bloque */
    width: 226px ; /* Ajusta el ancho de la línea */
    height: 6px; /* Grosor de la línea */
    background-color: rgb(215, 120, 87); /* Color de la línea */
    margin-top: 1px; /* Centra la línea */
    border-radius: 10px; /* Bordes redondeados */
    margin-left: -20px;
}

.platillos{
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 0 10px 0 10px;
}

.platillos article{
    background-image: url("../assets/home/seccion2/plato.png");
    height: 200px;
    aspect-ratio: 1 / 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    align-content: center;
    text-align: center;
    border-radius: 40px;
}

.platillos article p{
    background:rgb(218, 215, 215, .8);
    height: 60px;
    margin-top: 40px;
    color: white;
}

.article-3{
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.article-3 p{
    color: white;
    font-size: 28px;
}

.content-3{
    display:flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
}

.content-3 article{
    width: 100%;
}

.content-3 h4{
    background-color: rgb(135, 155, 135);
    width: 310px;
    padding: 10px;
    font-weight: 200;
    color: white;
}

.campo{
    color: white;
    padding-left: 10px;
    height: 300px;
    align-content: center;
}

.campo .logo{
    background-color: rgb(254, 193, 38);
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 0 auto;
    box-shadow: 3px 2px 6px #000;
    color: white;
    margin-bottom: 5px;
}

.campo img{
    height: 40px;
}

.campo .logo p{
    margin-top: 10px;
}


.campo .logo-NTC{
    background-color: rgb(255, 255, 255);
    width: 100px;
    height: 70px;
    border-radius: 20px;
    margin: 0 auto;
    box-shadow: 3px 2px 6px #000;
    color: black;
    font-weight: 800;
    margin-bottom: 5px;
}

@media (max-width: 370px) {
    .article-1{
        width: 80%;
    }
}

@media (max-width: 400px) {
    .small-image .plato{
        display: flex;
        flex-direction: column-reverse;
    }
}

/* Responsivo: En pantallas pequeñas, todo en bloque */
@media (max-width: 848px) {
    .grid-container {
        grid-template-columns: 1fr; /* Cambia a una sola columna */
        gap: 20px; /* Espaciado más amplio */
        padding: 20px; /* Reduce el padding */
    }

    .large-content {
        padding: 20px; /* Espaciado más cómodo */
    }

    .large-content .info{
        z-index: 10;
    }

    .small-image {
        flex-direction: row; /* Cambia la dirección de los elementos */
        justify-content: space-around; /* Espaciado uniforme */
    }

    .small-image .plato{
        width: 100%;
    }

    .platillos{
        display: block;
    }

    .platillos article{
        margin: 10px auto;
    
    }

    .article-3 p{
        font-size: 20px;
    }
}

@media (max-width: 1095px){
    .content-3{
        display: block;
    }

    .campo-1 h4{
        margin: 0 auto;
        margin-bottom: 5px;
    }
}

@media (max-width: 1320px){
    .small-image .plato{
        width: 100%;
    }

    .small-image .plato img{
        width: 50%;
    }
}

</style>
