sorteada = ["PYTHON","PHP","JAVASCRIPT"][Math.floor(Math.random() * 3)];
localStorage.setItem("sorteada",sorteada);
palavra_adivinhar = [];
localStorage.setItem("tentativas",3);
document.querySelector(".tentativas").innerHTML = "Tentativas: "+localStorage['tentativas'];
localStorage.setItem("vitoria",0);
for(x=0; x<sorteada.length;x++){
    espaco = document.querySelector(".espaço");
    div = document.createElement("div");
    div.classList="escondida";
    div.id=x;
    espaco.appendChild(div);
    palavra_adivinhar.push("*");
}
localStorage.setItem("palavra_adivinhar",JSON.stringify(palavra_adivinhar));
letras = document.querySelectorAll(".letra");

    letras.forEach(
        function(letra){
        letra.addEventListener("click",function(e){
            if(localStorage['tentativas']>0 && localStorage['vitoria']==0){
                if(localStorage.getItem("sorteada").indexOf(e.target.id)==-1){
                    e.target.classList.add("errado");
                    localStorage['tentativas']--;
                    document.querySelector(".tentativas").innerHTML = "Tentativas: "+localStorage['tentativas'];
                    if(localStorage['tentativas']==0){
                        document.querySelector('.resultado').innerHTML = "Você perdeu :(";
                    }
                }else{
                    e.target.classList.add("certo");
                    let palavra_adivinhar_local = JSON.parse(localStorage.getItem("palavra_adivinhar"));
                    for(let indice=0; indice<localStorage.getItem("sorteada").length;indice++){
                        if(localStorage.getItem("sorteada")[indice]==e.target.id){
                            palavra_adivinhar_local[indice] = e.target.id;
                            document.getElementById(indice).innerHTML=e.target.id;
                        }
                    }
                    localStorage.setItem("palavra_adivinhar",JSON.stringify(palavra_adivinhar_local));
                }
                if(JSON.parse(localStorage.getItem("palavra_adivinhar")).indexOf("*")==-1){
                    document.querySelector('.resultado').innerHTML = "Você venceu :)";
                    localStorage['vitoria'] = 1;
                }     
            }
        });
    }
);