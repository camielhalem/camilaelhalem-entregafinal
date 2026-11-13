function flexToggle() {
    let nav = document.querySelector ("#flexNav")
    nav.classList.toggle ("flexToggle")

    let links = document.querySelectorAll (".link")
    links.forEach (link => link.classList.toggle ("linkToggle"))
}



function abrirModal() {
    const modal = document.createElement("div")

    modal.innerHTML = `<h1> Realizar una donación❤️ </h1> <br>
    <p> ¡Tu aporte nos ayuda a seguir asistiendo a las personas que más lo necesitan! </p> <br>
    <label for="nombre"> Nombre/s: </label>
    <input type="text" id="nombre"> <br><br>
    <label for="apellido"> Apellido/s: </label>
    <input type="text" id="apellido"> <br><br>
    <label for="tel">Número de celular: </label>
    <input type="tel" id="tel"> <br><br>
    <label for="mail">Correo electrónico: </label>
    <input type="email" id="mail"> <br><br>
    <label for="monto">Elija el monto a donar</label>
    <select id="monto">
        <option value="25.000">25.000</option>
        <option value="50.000">50.000</option>
        <option value="75.000">75.000</option>
        <option value="100.000">100.000</option>
    </select> <br><br>
    <button onclick ="cambiarModal()"> Enviar donación </button>`

    modal.classList.add ("modal")

    document.body.appendChild (modal)
}

function cambiarModal() {
    document.querySelector (".modal").innerHTML = `
    <section class="donacionFinal">
        <img src="imagenes/todos.png" alt="" class="foto-modal">
        <h1> ¡Gracias por tu donación! </h1>
        <p>Con tu aporte, Puentes puede seguir ayudando a quienes más lo necesitan. Tu 
            donación se convierte en comida, abrigo y acompañamiento para nuestra comunidad.
        </p> 
        <h4> ¡Gracias por ser y hacer Puentes!</h4> 
        <button onclick ="cerrarModal()"> Cerrar </button>
    </section>`
    }


function cerrarModal() {
    document.querySelector (".modal").remove()
}