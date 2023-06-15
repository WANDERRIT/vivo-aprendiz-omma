console.log("")
//add link pra nova guia 1 e 2 
let listaMenu = document.querySelector('header .menu nav ul')

//criando novo item
let novoItemMenu = "<li><a href='Quem somos' >Quem somos </a> </li>"

//add link no html
listaMenu.innerHTML += novoItemMenu;

//alterar texto
let tituloReceitasPrincipais = document.querySelector(".receitas-principais h2")

tituloReceitasPrincipais.innerText = "receitas de sucesso";


//borde-radius 20px

let botoesBorda = document.querySelectorAll(".lista-receitas article a");
botoesBorda.forEach((botao2) => {
    botao2.style.borderRadius = "30px";
});





//cor do titulo
let titulosPaginaInterna = document.querySelectorAll(
    "div.receita-individual aside article.receita-relacionada h3 "
);

// verificando se selecionei os elementos corretamente
// console.log(titulosPaginaInterna);

titulosPaginaInterna.forEach((titulo) => {
    titulo.style.color = "#FFA000";
});

//add novas receitas
let receitas = [{
    titulo: "Lasanha",
    imagem: "imagens/lasanha.jpg",
    link: "receita.html",

},
{
    titulo: "Hamburger",
    imagem: "imagens/hamburger.jpeg",
    link: "receita.html",

},
{
    titulo: "Cachorro-quente",
    imagem: "imagens/hotdog.jpg",
    link: "receita.html",

},
];


receitas.forEach((receita) => {
  receitas += `
        <article>
            <div class="thumb" style="background-image: url(${receita.imagem});"></div>
            <h3>${receita.titulo}</h3>
            <a href="${receita.link}">conferir</a>
        </article>
    `;
});

let containerReceitasPrincipais = document.querySelector(
  ".receitas-principais .lista-receitas"
);

if (containerReceitasPrincipais) {
  containerReceitasPrincipais.innerHTML = receitas;
}
