import { Footer } from '../.nuxt/components';
<template>
    <footer >
        <section>
            <img src="../assets/logos/logoFooter.png" alt="">
        </section>
        
        <section class="sectio-2">
            <p><strong>CONÓCENOS</strong> <br>
                Zona de Cubrimiento <br>
                en Domicilios <br>
                Politicas de Privacidad <br>
                Términos y Condiciones <br>
                Servicio al Cliente
            </p>
        </section>


    </footer>
</template>  
<style scoped>
footer{
    background-color: rgb(215, 120, 87);
    display: flex;
    justify-content: space-between;
    height: 100px;
    width:100%;
}
img{
    height: 100%;
    width:100%;
}
.sectio-2{
    padding: 5px 40px 10px;
}
p{
    color: white;
    text-align: end;
    font-size: 10px;
}

@media (max-width:350px) {
    footer{
        height: 100%;
    }

    .sectio-2{
        padding: 5px 10px 0 0 ;
        width: 100%;
    }

}

</style>