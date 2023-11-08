window.addEventListener("DOMContentLoaded", event => {
    const contenedor = document.querySelector("#data")
    const spinner = document.querySelector("#cargando")
    console.log(contenedor);
    spinner.innerHTML = "Cargando...";

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(datos => {

            show(contenedor, datos)
        })
        .catch(error => {
            console.log('Falló por: ' + error.message)
        })
        .finally(()=>{
            setTimeout(
                () => {
                    spinner.innerHTML = "";
                }, 1000
            )

        })

    function show(contenedor, elementos) {


        elementos.forEach(elemento => {
            let mostrar = `
        <article>
        <h1>${elemento.title}</h1>
        <p>${elemento.body}</p>
        </article>
        <hr>
        `;
            contenedor.innerHTML += mostrar;
        })

        return elementos;
    }

})


