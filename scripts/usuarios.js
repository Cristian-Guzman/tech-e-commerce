const formulario = document.querySelector('#formulario');
const API_URL = 'http://localhost:4002/usuarios';

formulario.addEventListener('submit', async e => {
    const name = document.querySelector('#name').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const url = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            name,
            lastName,
            email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
    e.preventDefault();
})