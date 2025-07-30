const caixas = document.querySelectorAll('.caixa');

window.addEventListener('scroll', verificarCaixas);

verificarCaixas();

function verificarCaixas() {
  const pontoDisparo = window.innerHeight / 5 * 4;

  caixas.forEach(caixa => {
    const topoDaCaixa = caixa.getBoundingClientRect().top;

    if (topoDaCaixa < pontoDisparo) {
      caixa.classList.add('mostrar');
    } else {
      caixa.classList.remove('mostrar');
    }
  });
}
