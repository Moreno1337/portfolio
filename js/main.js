const menuSanduiche = document.querySelector('[data-sanduiche]');
const navegacao = document.querySelector('.cabecalho__navegacao');

menuSanduiche.addEventListener('click', () => {
    mostraMenu();
});

function mostraMenu() {
    if(navegacao.classList.length == 2) {
        navegacao.classList.remove('cabecalho__esconde');
    } else {
        navegacao.classList.add('cabecalho__esconde');
    }
}
