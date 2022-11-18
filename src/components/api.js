


async function llamada() {
    const response = await fetch('https://dragon-ball-super-api.herokuapp.com/api/characters')
    const data = await response.json()
    const contenido = document.getElementById('contenido')
    const titulo = document.getElementById('titulo')
    const universo = document.getElementById('universo')
    const imagen = document.getElementById('imagen')
    data.forEach(element => contenido.parentNode.insertBefore(contenido.cloneNode(true), 
                            contenido, 
                            titulo.innerHTML = element.name,
                            universo.innerHTML = 'Universo ' + element.universe,
                            imagen.src = element.imageUrl));
  }

  export default llamada