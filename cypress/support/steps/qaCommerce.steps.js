import {
  qaCommercePage
} from "../pages/qaCommerce.page";

import { 
  Given, When, Then 
} from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

// Acessar a aplicação 
Given(/^que acessei o eCommerce$/, () => {
	qaCommercePage.acessarAplicacao()
});

// Selecionar produtos
When(/^que realizei a seleção de produtos$/, () => {
  qaCommercePage.selecionarProdutos() 
  qaCommercePage.limparQuantiddades()
  qaCommercePage.selecionarQuantidades()
  qaCommercePage.adicionarProdutosNoCarrinho()
  qaCommercePage.clicarNoMenuCarrinho()
  qaCommercePage.validarItensNoCarrinho()
  qaCommercePage.botaoCheckout()
})

When(/^que realizei a seleção de produtos para o carrinho$/, () => {
  qaCommercePage.selecionarProdutos() 
  qaCommercePage.limparQuantiddades()
  qaCommercePage.selecionarQuantidades()
  qaCommercePage.adicionarProdutosNoCarrinho()
  qaCommercePage.clicarNoMenuCarrinho()
  
})

// Preencher dados para entrega 
And(/^que preenchi os dados para entrega$/, () => {
  qaCommercePage.dadosParaEntregaNome()
  qaCommercePage.dadosParaEntregaSobrenome()
  qaCommercePage.dadosParaEntregaEndereco()
  qaCommercePage.dadosParaEntregaNumero()
  qaCommercePage.dadosParaEntregaCep()
  qaCommercePage.dadosParaEntregaTelefone()
  qaCommercePage.dadosParaEntregaEmail()
  qaCommercePage.dadosParaEntregaCriarConta()
  qaCommercePage.criarSenha()
  qaCommercePage.confirmarSenha()
})

Then(/^o pedido é realizado com sucesso$/, () => {
  qaCommercePage.checkoutFormasDepagamento()
  qaCommercePage.checkoutTermo()
  qaCommercePage.btnFinalizarPedido()
  qaCommercePage.statusDoPedido()
})

Then(/^os produtos foram inseridos no carrinho com sucesso$/, () => {
  qaCommercePage.validarItensNoCarrinho()
})

Then(/^então validei as mensagens de erros no preenchimento dos campos obrigatórios$/, () => {
  qaCommercePage.dadosParaEntregaCriarConta()
  qaCommercePage.criarSenha()
  qaCommercePage.confirmarSenha()
  qaCommercePage.checkoutFormasDepagamento()
  qaCommercePage.checkoutTermo()
  qaCommercePage.btnFinalizarPedido()
  qaCommercePage.validarAlertaCamposObrigatorios()
})

// Testes de API Post
let response;
let userId;

Given('que o usuário possui credenciais válidas', () => {
    Cypress.env('loginQaeCommerce', {
    email: 'teste24@teste.com.br',
    password: 'Qualidade2025@'
  });
});

When('ele envia uma requisição de login', () => {
 cy.request({
    method: 'POST',
    url: 'http://localhost:3000/api/login', // ✅ Corrigir para a rota real de login
    body: Cypress.env('loginQaeCommerce'),
    failOnStatusCode: false
  }).then((res) => {
    response = res;
    cy.log('Status:', res.status);
    cy.log('Body:', JSON.stringify(res.body));
  });
});

Then('deve receber uma resposta de sucesso', () => {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.property('token');
});

// Testes de API GET 

Given('que o usuário está autenticado e possui um carrinho', () => {
  // Simulando um ID de usuário válido
  userId = 123;
});

When('ele envia uma requisição para listar os itens do carrinho', () => {
  cy.request({
    method: 'GET',
    url: `http://localhost:3000/api/carrinho/${userId}`,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
    cy.log(JSON.stringify(res.body));
  });
});

Then('ele deve receber uma lista de itens do carrinho com status 200', () => {
  expect(response.status).to.eq(200);
  expect(Array.isArray(response.body)).to.be.true;

  if (response.body.length > 0) {
    const item = response.body[0];
    expect(item).to.have.property('id');
    expect(item).to.have.property('message');
  } else {
    cy.log('Carrinho está vazio');
  }
});