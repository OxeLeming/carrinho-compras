//Começar sempre com o carrinho zerado
let totalCarrinho = 0;
limpar();


//Selecionar o produto
function adicionar() {
  let quantia = document.getElementById('quantidade').value;
  if (quantia != 0) {
    var selecionado = document.getElementById("produto").value;
    var produto = selecionado.split('-')[0];
    var precoUnitario = selecionado.split('R$')[1];
    var quantidade = document.getElementById("quantidade").value;

    //calcular subtotal dos produtos selecionados
    var subtotalProduto = quantidade * precoUnitario;

    //adicionar itens ao carrinho
    var carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${subtotalProduto}</span>
    </section>`

    totalCarrinho = totalCarrinho + subtotalProduto;
    document.getElementById('valor-total').textContent = `R$ ${totalCarrinho}`;
    document.getElementById('quantidade').value = 0;

  } else {
    alert('Por favor, escolha a quantidade.');
  }
}

function limpar() {
  document.getElementById('valor-total').textContent = "R$ 0";
  document.getElementById('quantidade').value = 0;
  document.getElementById('lista-produtos').innerHTML = '';
}
