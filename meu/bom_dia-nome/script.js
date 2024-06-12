//seria a frase (bom dia + nome(dps));
var output = document.querySelector(".frase");
//o btn;
var botao = document.querySelector(".botao");
//a entrada do usuário (nome);
var input = document.querySelector(".nome");


//Aqui ele faz mandar automático quando qualquer coisa muda no nome;
/*
input.addEventListener("input", function(e){
    output.innerHTML = "Bom dia, " + input.value;  
})
*/

//adicionei um evento no botão para o click
botao.addEventListener("click", function(e){

    //não deixa ele reiniciar a pag quando clicar
    e.preventDefault();
    //atualiza o h1
    output.innerHTML = "Bom dia, " + input.value;

});
