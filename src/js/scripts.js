let circulo = document.querySelector(".circulo");
let imagem = document.querySelector(".copo");

function trocarAcor(cor) {
  circulo.style.background = cor;
}
function trocarImagem(endereco) {
  imagem.src = endereco;
}
