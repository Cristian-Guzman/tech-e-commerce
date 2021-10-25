const btnPerro = document.querySelector('#btnperro');
const btnGato = document.querySelector('#btnGato');
const dbGatos = 'http://localhost:4000/gatos';
const dbPerros = 'http://localhost:4001/perros';

btnPerro.addEventListener('click', () => {
    obtenerMascotas(dbPerros);
})
btnGato.addEventListener('click', () => {
    obtenerMascotas(dbGatos);
})

const obtenerMascotas = async(mascota) => {
    let mostrarMascotas = document.querySelector('.grid-mascotas')
    mostrarMascotas.innerHTML = ``;
    const data = await fetch(mascota);
    const dataJson = await data.json();
    dataJson.forEach(mascota => {
        const {imagen, nombre, raza} = mascota;
        mostrarMascotas.innerHTML += `<div class="col mascotas">
        <a href="#" class="enlace-detsalle-mascota">
            <div class="card bg-dark text-white gradiente">                
                <img src="${imagen}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${nombre}</h5>
                        <p class="card-text body2Regular">${raza}</p>
                </div>
            </div>
        </a>
    </div>`;
    });
    console.log(dataJson);
}