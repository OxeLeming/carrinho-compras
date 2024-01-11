//Selecionar o produto
function adicionar(){
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

 
}

