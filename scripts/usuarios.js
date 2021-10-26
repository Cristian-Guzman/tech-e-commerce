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
    e.preventDefault()
})
