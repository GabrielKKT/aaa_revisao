
var result = document.querySelector('.result');
var jogo = document.querySelector('.jogo');
for(x=1; x<10; x++){


let btn = document.createElement("button");
btn.className = ("botao");
btn.innerHTML = x
btn.value = x;
btn.addEventListener('click', function(e){
    result.innerHTML += btn.value;
})

jogo.appendChild(btn);

}