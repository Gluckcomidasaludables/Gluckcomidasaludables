import { Footer } from '../.nuxt/components';
<template>
    <div class="content">
        <Menu />
        <div>
            <img src="../assets/menu/img1.avif" alt="" class="img1" />
        </div>

        <div class="menu d-flex">
            <div class="titulo">
                <h1>MENÚ</h1>
            </div>

            <!-- Dropdown usando Bootstrap 5 -->
            <div class="dropdown">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i class="fa-solid fa-bars"></i>
                </button>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a class="dropdown-item" href="#recomendados">Recomendados</a></li>
                    <li><a class="dropdown-item" href="#especiales">Especiales</a></li>
                    <li><a class="dropdown-item" href="#snacks">Snacks</a></li>
                </ul>
            </div>
        </div>
        
        <section class="recomendados" id="recomendados">
            <div class="container-fluid">
                <h2 class="mb-4">RECOMENDADOS</h2>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="../assets/menu/plato1.avif" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Componente 1</h5>
                                <p class="card-text">Contenido del componente 1.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src="../assets/menu/plato2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Componente 2</h5>
                                <p class="card-text">Contenido del componente 2.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src="../assets/menu/plato3.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Componente 3</h5>
                                <p class="card-text">Contenido del componente 3.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src="../assets/menu/plato4.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Componente 4</h5>
                                <p class="card-text">Contenido del componente 4.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="especiales" id="especiales">
            <div class="container-fluid">
                <h2 class="mb-4">ESPECIALES</h2>
            </div>

            <div class="especial">
                <div class="col">
                    <div class="card">
                        <img src="../assets/menu/plato4.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Arma tu Especial</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore optio obcaecati reiciendis!</p>
                            <button @click="toggleOptions" class="agregar">+</button>

                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="arma-especial" v-if="showOptions">

                <div class="platillo">
                    <img src="../assets/menu/plato4.webp" class="card-img-top" alt="">
                    <div  class="opciones">
                        <div>
                            <h1>Arma tu Especial</h1>
                            <p>Base de yogur sin azúcar, fruta y toppings</p>
                        </div>
                        <div class="">
                            <div class="d-flex" style="width:100%; justify-content: space-between; padding: 0 40px; gap:10px;">
                                <section class="w-100">
                                    <h4>Carbo</h4>
                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion1">Arroz</label>
                                            <input type="checkbox" id="opcion1" name="opciones" value="opcion1">
                                        </article>

                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion2">Parba</label>
                                            <input type="checkbox" id="opcion2" name="opciones" value="opcion1">
                                        </article>

                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion3">Papa</label>
                                            <input type="checkbox" id="opcion3" name="opciones" value="opcion1">
                                        </article>

                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion4">Platano</label>
                                            <input type="checkbox" id="opcion4" name="opciones" value="opcion1">
                                        </article>
                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion5">Yuca</label>
                                            <input type="checkbox" id="opcion5" name="opciones" value="opcion1">
                                        </article>
                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion5">Maiz</label>
                                            <input type="checkbox" id="opcion5" name="opciones" value="opcion1">
                                        </article>
                                </section>



                                <section class="w-100">   
                                    <h4>Proteina</h4>
                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion1">Banana</label>
                                        <input type="checkbox" id="opcion1" name="opciones" value="opcion1">
                                    </article>

                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion2">Huevo</label>
                                        <input type="checkbox" id="opcion2" name="opciones" value="opcion1">
                                    </article>

                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion3">Pechuga</label>
                                        <input type="checkbox" id="opcion3" name="opciones" value="opcion1">
                                    </article>

                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion4">Rex</label>
                                        <input type="checkbox" id="opcion4" name="opciones" value="opcion1">
                                    </article>
                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion5">Cerdo</label>
                                        <input type="checkbox" id="opcion5" name="opciones" value="opcion1">
                                    </article>
                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion5">Pescado</label>
                                        <input type="checkbox" id="opcion5" name="opciones" value="opcion1">
                                    </article>
                                </section>
                            </div>
                            

                            <div class="d-flex" style="width:100%; justify-content: space-between; padding: 0 40px; gap:10px;">
                                <section class="w-100">
                                    <h4>Veget</h4>
                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion1">Zanahoria</label>
                                            <input type="checkbox" id="opcion1" name="opciones" value="opcion1">
                                        </article>

                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion2">Aguacate</label>
                                            <input type="checkbox" id="opcion2" name="opciones" value="opcion1">
                                        </article>

                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion3">Tomate</label>
                                            <input type="checkbox" id="opcion3" name="opciones" value="opcion1">
                                        </article>

                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion4">Lechuga</label>
                                            <input type="checkbox" id="opcion4" name="opciones" value="opcion1">
                                        </article>
                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion5">Brocoli</label>
                                            <input type="checkbox" id="opcion5" name="opciones" value="opcion1">
                                        </article>
                                </section>


                                <section class="w-100">   
                                    <h4>Toppings</h4>
                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion1">Frijoles</label>
                                        <input type="checkbox" id="opcion1" name="opciones" value="opcion1">
                                    </article>

                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion2">Lentejas</label>
                                        <input type="checkbox" id="opcion2" name="opciones" value="opcion1">
                                    </article>

                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion3">Soya</label>
                                        <input type="checkbox" id="opcion3" name="opciones" value="opcion1">
                                    </article>

                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion4">Mani</label>
                                        <input type="checkbox" id="opcion4" name="opciones" value="opcion1">
                                    </article>
                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion5">Almendras</label>
                                        <input type="checkbox" id="opcion5" name="opciones" value="opcion1">
                                    </article>
                                </section>
                            </div>
                            <div class="d-flex" style="gap: 10px; justify-content: center; aling-items:center; ">

                                <div class="contador">
                                    <button @click="decrementar" class="btn btn-outline-danger">-</button>
                                    <span class="cantidad">{{ cantidad }}</span>
                                    <button @click="incrementar" class="btn btn-outline-success">+</button>
                                </div>
                                <button @click="toggleOptions" class="btn btn-primary " style="height:40px;" >Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Bloque con opciones (visible cuando se hace clic en "agregar") -->
            </div>

        </section>


        <section class="snacks" id="snacks">
            <div class="container-fluid">
                <h2 class="mb-4">Snacks</h2>
            </div>

            <div class="especial">
                <div class="col">
                    <div class="card">
                        <img src="../assets/menu/snack.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Componente 4</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est laudantium ea!</p>
                            <button @click="toggleOptionsSnaks" class="agregar">+</button>

                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="arma-snack" v-if="showOptionsSnack">

                <div class="platillo">
                    <img src="../assets/menu/snack.png" class="card-img-top" alt="">
                    <div  class="opciones">
                        <div>
                            <h1>Arma tu Snack</h1>
                            <p>Base de yogur sin azúcar, fruta y toppings</p>
                        </div>
                        <div class="">
                            <div class="d-flex" style="width:100%; justify-content: space-between; padding: 0 40px; gap:10px;">
                                <section class="w-100">
                                    <h4>Frutas</h4>
                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion1">Banana</label>
                                            <input type="checkbox" id="opcion1" name="opciones" value="opcion1">
                                        </article>

                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion2">Durazno</label>
                                            <input type="checkbox" id="opcion2" name="opciones" value="opcion1">
                                        </article>

                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion3">Mango</label>
                                            <input type="checkbox" id="opcion3" name="opciones" value="opcion1">
                                        </article>

                                        <article class="d-flex" style="width:100%; justify-content: space-between;">
                                            <label for="opcion4">Fresas</label>
                                            <input type="checkbox" id="opcion4" name="opciones" value="opcion1">
                                        </article>
                                </section>



                                <section class="w-100">   
                                    <h4>Toppings</h4>
                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion5">Mani</label>
                                        <input type="checkbox" id="opcion5" name="opciones" value="opcion1">
                                    </article>
                                    <article class="d-flex" style="width:100%; justify-content: space-between;">
                                        <label for="opcion5">Almendras</label>
                                        <input type="checkbox" id="opcion5" name="opciones" value="opcion1">
                                    </article>
                                </section>
                            </div>
                            
                            <div class="d-flex" style="gap: 10px; justify-content: center; aling-items:center; ">

                                <div class="contador">
                                    <button @click="decrementarSnack" class="btn btn-outline-danger">-</button>
                                    <span class="cantidad">{{ cantidadSnack }}</span>
                                    <button @click="incrementarSnack" class="btn btn-outline-success">+</button>
                                </div>
                                <button @click="toggleOptions" class="btn btn-primary " style="height:40px;" >Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Bloque con opciones (visible cuando se hace clic en "agregar") -->
            </div>

        </section>

        <Footer/>

    </div>
</template>


<script>
export default {
    data() {
        return {
        showOptionsSnack: false,
        showOptions: false,
        cantidad: 1, // Valor inicial del contador
        cantidadSnack: 1, // Valor inicial del contador
        };
    },
    methods: {
        toggleOptionsSnaks(){
            this.showOptionsSnack = !this.showOptionsSnack;
        },
        toggleOptions() {
        this.showOptions = !this.showOptions;
        },
        incrementar() {
        this.cantidad++;
        },
        decrementar() {
        if (this.cantidad > 1) {
            this.cantidadSnack--;
        }
        },
        incrementarSnack() {
        this.cantidadSnack++;
        },
        decrementarSnack() {
        if (this.cantidadSnack > 1) {
            this.cantidadSnack--;
        }
        },
    },
};
</script>

<style scoped>
.content {
    /* Estilos generales */
}

.img1 {
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
}

.menu {
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    width: 100%;
    gap: 10px;
}

.menu::after {
    position: absolute;
    content: "";
    height: 8px;
    width: 100px;
    margin-top: 40px;
    border-radius: 10px;
    background-color: rgb(0, 170, 173);
}

.menu .titulo h1 {
    font-size: 1.5rem;
    color: rgb(0, 170, 173);
    margin: 0;
    
}

.dropdown button {
    background-color: transparent;
    color: rgb(0, 170, 173);
    font-weight: 800;
    border: none;
    font-size: 30px;
}

/* Estilo del dropdown */
.dropdown-menu {
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
    padding: 10px 20px;
    font-size: 1rem;
}

.dropdown-item:hover {
    background-color: rgb(0, 170, 173);
    color: white;
}

/* Estilos de la sección recomendados */
.recomendados {
    padding: 10px 0;
    position: relative;
    width: 100%;
}

.recomendados h2 {
    color: rgb(215, 120, 87);
    font-weight: 800;
}

.recomendados h2::after {
    position: absolute;
    content: "";
    height: 8px;
    width: 310px;
    margin-top: 40px;
    margin-left: -260px;
    border-radius: 10px;
    background-color: rgb(215, 120, 87);
}

.recomendados .container-fluid {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
}

.card {
    width: 100%;
}

.card img {
    height: 150px;
    width: 100%;
    object-fit: cover;
}

/* Estilos de la sección especiales */
.especiales {
    padding: 10px 0;
    position: relative;
    width: 100%;
}

.especiales h2 {
    color: rgb(215, 120, 87);
    font-weight: 800;
}

.especiales h2::after {
    position: absolute;
    content: "";
    height: 8px;
    width: 300px;
    margin-top: 40px;
    margin-left: -250px;
    border-radius: 10px;
    background-color: rgb(215, 120, 87);
}

.especiales .container-fluid {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
}

.especial {
    width: 300px;
}

.opciones {
    margin-top: 10px;
}

.agregar {
    background-color: rgb(0, 170, 173);
    color: white;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    width: 40px;
    height: 40px;
}

.arma-especial{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 80px 0 80px 0;
}

.arma-especial .platillo{
    width: 60%;
    display: flex;
    margin: 0 auto;
    gap: 10px;
    border-radius: 40px;
    box-shadow: 0px 3px 3px 5px rgb(236, 231, 231);
    overflow: hidden;
    max-width: 750px;
}


.arma-especial .platillo img {
    height: 100%;
    width: 50%;
    object-fit: cover;
}

.contador {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
}
.cantidad {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 10px;
}


/* los estilos de los snacks */

.snacks {
    padding: 10px 0;
    position: relative;
    width: 100%;
}

.snacks h2 {
    color: rgb(215, 120, 87);
    font-weight: 800;
}

.snacks h2::after {
    position: absolute;
    content: "";
    height: 8px;
    width: 300px;
    margin-top: 40px;
    margin-left: -250px;
    border-radius: 10px;
    background-color: rgb(215, 120, 87);
}

.snacks .container-fluid {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
}


.arma-snack{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 80px 0 80px 0;
}

.arma-snack .platillo{
    width: 60%;
    display: flex;
    margin: 0 auto;
    gap: 10px;
    border-radius: 40px;
    box-shadow: 0px 3px 3px 5px rgb(236, 231, 231);
    overflow: hidden;
    max-width: 750px;
}


.arma-snack .platillo img {
    height: 100%;
    width: 50%;
    object-fit: cover;
}



@media (max-width:1020px) {
    .arma-especial .platillo{
        display: block;
        height: 100%;
        width: 100%;
        margin: 0 40px;
    }

    .arma-especial .platillo img{
        width: 100%;
        height: 300px;
    }
    .arma-snack .platillo{
        display: block;
        height: 100%;
        width: 100%;
        margin: 0 40px;
    }

    .arma-snack .platillo img{
        width: 100%;
        height: 300px;
    }
}
</style>
