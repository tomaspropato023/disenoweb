"use strict"

let url = "https://rickandmortyapi.com/api/character"

async function mostrarData() {
    let respuesta = await fetch(url)
    let data = await respuesta.json()
    data.results.forEach(element => {
        document.querySelector('#informacion').innerHTML += 
        `<tr>
          <td> ${element.name} </td>
          <td> ${element.species} </td>
          <td> ${element.id} </td>
        </tr>`
    });   
}

mostrarData();