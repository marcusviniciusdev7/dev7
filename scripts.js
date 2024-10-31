let formulario = document.querySelector(".formulario") /* ir para o html (document)// query busca o q eu quero*/
console.log(formulario)

function aparecerFormulario(){
formulario.style.left= "50%"
}

function desaparecerFormulario(){
    formulario.style.left= "-50%"
}
