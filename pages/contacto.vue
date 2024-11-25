<template>
    <div class="content">
        <div class="contact-section">
            <h2>Contáctenos</h2>
            <form method="POST" id="form" >
                <div class="form-group">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div class="form-group">
                    <label for="message">Mensaje:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <div class="d-flex" style="gap: 20px;">
                    <button @click.prevent="goBack">Volver</button>
                    <button type="submit" id="button">Enviar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    methods: {
        goBack() {
        this.$router.go(-1); // Retrocede en el historial de navegación
        },
        submissionForm() {
          // Lógica para enviar el formulario
        console.log('Formulario enviado');
        }
    },
    mounted() {
        emailjs.init('ZlZz5K-prGUlNdILj');
        const btn = document.getElementById('button');
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();
            btn.value = 'Enviando...';
            const serviceID = 'default_service';
            const templateID = 'template_c4z1gbw';
            emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar correo electrónico';
                alert('¡Enviado!');
            }, (err) => {
                btn.value = 'Enviar correo electrónico';
                alert(JSON.stringify(err));
            });
        });
    }
};
</script>

<style scoped>
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #b9f0e4;
    color: black;
}
.contact-section {
    width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #A7D8DE;
    border-radius: 40px;
    box-shadow: 0 4px 15px rgb(255, 255, 255), 0 2px 8px rgba(255, 255, 255, 0.603);
}
.contact-section h2 {
    padding: 0 35%;
}
.form-group {
    margin-bottom: 15px;
}
label {
    display: block;
    margin-bottom: 5px;
}
input, textarea, button {
    outline: none;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 40px;
    border: 2px solid #aff3f0;
}
.success-message {
    color: green;
}
.error-message {
    color: red;
}
</style>
