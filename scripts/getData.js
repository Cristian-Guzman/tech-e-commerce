const cards = document.querySelector('.container-cards');
const URL_POR = `http://localhost:4000/portatiles`;
const URL_CEL = `http://localhost:4001/celulares`;
const btnCelular = document.querySelector('.btnCelular');
const btnPortatil = document.querySelector('.btnPortatil');

btnCelular.addEventListener('click', ()=> {
    getData(URL_CEL);
})
btnPortatil.addEventListener('click', ()=> {
    getData(URL_POR);
})

const getData = async(data) => {
    cards.innerHTML = "";
    const res = await fetch(data);
    const datos = await res.json();
    
    datos.forEach( elemento => {
        const {nombre, marca, imagen} = elemento;
        cards.innerHTML += `
        <div class="card">
                <img src="${imagen}">
            <div class="container">
                <h2>${nombre}</h2>
            </div>
        </div>`
    });
}
