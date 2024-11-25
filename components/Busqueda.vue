<template>
    <div class="contenedor">
        <!-- Navbar -->
        <nav class="navbar">
            <!-- Logo -->
            <div class="logo-shape">
                <img src="../assets/logos/logoNav.png" alt="">
            </div>

            <!-- Contenido derecho de la barra de navegación -->
            <div class="right-content">
                <!-- Sección izquierda: Login y Register -->
                <section class="session d-flex">
                    <article>
                        <a href="">Login</a>
                    </article>
                    <span> / </span>
                    <article>
                        <a href="">Register</a>
                    </article>
                </section>

                <!-- Sección central: Formulario de búsqueda -->
                <form class="form-inline">
                    <button class="btn buscar-btn" type="submit">
                        <i class="fa-solid fa-magnifying-glass buscar-icon" alt="buscar"></i>
                    </button>
                    <input
                        class="form-control buscar-input"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </form>

                <!-- Sección derecha: Redes sociales -->
                <section class="redes">
                    <a href="https://www.instagram.com" target="_blank" class="social-icon">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/573223260424" target="_blank" class="social-icon">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" class="social-icon">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </section>
            </div>
        </nav>

        <!-- Componente Menu -->
        <div class="menu">
            <Menu />
        </div>
    </div>
</template>

<style scoped>
/* ========================
    Estilos generales 
======================== */
.contenedor {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 40px;
}



/* ========================
    Logo
======================== */
.logo-shape {
    position: absolute;
    margin-top:100px ;
    margin-left: -20px;
    background-color: rgb(0, 95, 102);
    width: 350px;
    height: 160px;
    border-radius: 100% 0% 100% 0% / 0% 47% 53% 100%;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-shape img{
    width:  200px;
    margin-top: -20px;
    margin-left: -60px;
}

a{
    text-decoration: none;
    color: white;
}
/* ========================
    Navbar
======================== */
.navbar {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background: linear-gradient(to right, rgb(0, 95, 102), rgb(0, 170, 173));
    padding: 0 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
}

.right-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: 15px;
}

/* ========================
    Menu
======================== */
.menu {
    width: 100%;
    padding: 20px 0; /* Espaciado interno */
    margin-top: -10px; /* Ajusta para que el logo se superponga */
    z-index: 0; /* Debajo del logo-shape */
}

/* ========================
    Otros estilos
======================== */
.session span {
    color: white;
    font-size: 16px;
}

.form-inline {
    display: flex;
    align-items: center;
    gap: 10px;
}

.buscar-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
}

.buscar-icon {
    font-size: 20px;
    color: white;
}

.buscar-input {
    max-width: 300px;
    height: 35px;
    border: 1px solid white;
    border-radius: 4px;
    padding: 0 10px;
    color: black;
}

.buscar-input::placeholder {
    color: gray;
}

.redes {
    display: flex;
    gap: 15px;
}

.social-icon {
    font-size: 20px;
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.social-icon:hover {
    color: rgb(96, 217, 219);
}

@media (max-width: 859px) {
    .logo-shape{
        display: none;
    }
}

</style>
