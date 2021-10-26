const login = document.querySelector('#formulario');
const API_URL = 'http://localhost:4002/usuarios';

login.addEventListener('click', async e => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            name,
            email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
    if (name != "" && email != "") {
        alert('Datos guardados exitosamente.')
        const salida = confirm('¿Estás seguro de salir de la página?');
        if (salida) {
            window.open('index.html');
        } else {
            alert('No funciona')
        }
    } else {
        alert('Debes rellenar todos los campos.')
    }
})
