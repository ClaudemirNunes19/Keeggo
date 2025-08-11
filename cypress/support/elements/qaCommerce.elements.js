class LoginQaElements {
//Url
abrirSistema = () => ''

//Login
minhaConta = () => '[id="account-link"]'
emailUsuario = () => '[id="email"]'
senha = () => '[id="password"]'
confirmarSenha = () => '[id="confirm-password"]'
 
//Produtos 
produtoMoletom = () => '.card-img-top[src*="imagem1.jpeg"]'
quantidadeProduto = () => '[id="product-quantity"]'
adicionarCarrinho = () => "button[data-id='1']"
carrinho = () => '[id="cart-count"]'
seuCarrinho = () => 'a.nav-link[href="/cart.html"]'

//Botão
 botao = () => 'a[href="/checkout.html"]'
 btnFinalizarPedido = () => '.btn'
   
//Dados para entrega 
 nome = () => '[id="first-name"]'
 sobrenome = () => '[id="last-name"]'
 endereco = () => '[id="address"]'
 numero = () => '[id="number"]'
 cep = () => '[id="cep"]'
 telefone = () => '[id="phone"]'
 criarConta = () => '[id="create-account"]'

//Forma de pagamento
formaPagamento = () => '[id="payment-pix"]'
termo = () => '[id="terms"]'

//status do Pedido 
statusPedido = () => '[id="order-status"]'

//Mensagem esperarada
mensagemEsperada = () => '[id="alert-container"]'
}

export const loginQaElements = new LoginQaElements();