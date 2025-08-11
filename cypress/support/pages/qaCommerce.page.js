/// <reference types="cypress" />


import {
  loginQaElements
} from "../elements/qaCommerce.elements";

import {
  context
} from '../../fixtures/login';

const dados = context.database

class QaCommercePage {

  /**
   * Abrir o sistema.
   *
   */
  acessarAplicacao() {
    cy.visit(loginQaElements.abrirSistema(), {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear();
      },
    });
  }
  
  /**
   *  Selecionar produtos
   */
  selecionarProdutos() { 
    cy.get(loginQaElements.produtoMoletom())
    .click();
  }

  /**
  * Limpar quantidades
  */
  limparQuantiddades() {
    cy.get(loginQaElements.quantidadeProduto())
    .click()
    .clear()
  }

 /**
  * Selecionar quantidade de produtos 
  */
  selecionarQuantidades() {
    cy.get(loginQaElements.quantidadeProduto())
    .should('be.visible')
    .type('2')   
  }

  /**
 * Adicionar produtos ao carrinho
 */
  adicionarProdutosNoCarrinho() {
    cy.get(loginQaElements.adicionarCarrinho(), { timeout: 10000 }) // espera até 10s se necessário
    .click({ force: true }); // força o clique se necessário
}

  /**
   * Clicar no menu carrinho
   */  
  clicarNoMenuCarrinho() {
    cy.get(loginQaElements.carrinho())
    .should('be.visible')
    .click()
  }

  /**
   * Vaiidar itens no carrinho
   */
  validarItensNoCarrinho() {
    cy.get(loginQaElements.seuCarrinho())
    .click()
  }

  /**
   * Botão ir para chekout 
   */
  botaoCheckout() {
    cy.get(loginQaElements.botao())
    .click()
  }

  /**
   * Dados para entrega nome
   * @param {string} nome
   */
  dadosParaEntregaNome() {
    const ds = dados.qaCommerceDados
    cy.get(loginQaElements.nome())
    .should('be.visible')
    .type(`${ds.nome}`)
    
  }

  /**
   * Dados para entrega sobrenome
   * @param {string} sobrenome
   */
  dadosParaEntregaSobrenome() {
    const ds = dados.qaCommerceDados
    cy.get(loginQaElements.sobrenome())
    .should('be.visible')
    .type(`${ds.sobrenome}`)
  }

  /**
   * Dados para entrega endereco
   * @param {string} endereco
   */
  dadosParaEntregaEndereco() {
    const ds = dados.qaCommerceDados
    cy.get(loginQaElements.endereco())
    .should('be.visible')
    .type(`${ds.endereco}`)
  }

  /**
   * Dados para entrega numero
   * @param {string} numero
   */
  dadosParaEntregaNumero() {
    const ds = dados.qaCommerceDados
    cy.get(loginQaElements.numero())
    .should('be.visible')
    .type(`${ds.numero}`)
  }

  /**
   * Dados para entrega cep
   * @param {string} cep
   */
  dadosParaEntregaCep() {
    const ds = dados.qaCommerceDados
    cy.get(loginQaElements.cep())
    .should('be.visible')
    .type(`${ds.cep}`)
  }

  /**
   * Dados para entrega telefone
   * @param {string} telefone
   */
  dadosParaEntregaTelefone() {
    const ds = dados.qaCommerceDados
    cy.get(loginQaElements.telefone())
    .should('be.visible')
    .type(`${ds.telefone}`)
  }
  
   /**
   * preencher o campo de email.
   * @param {string} email
   */
  dadosParaEntregaEmail(email) {
    const ds = dados.qaCommerceDados
    cy.get(loginQaElements.emailUsuario())
    .should('be.visible')
    .type(`${ds.email}`)
  }

   /**
   * Criar conta
   */
  dadosParaEntregaCriarConta() {
    const ds = dados.qaCommerceDados
    cy.get(loginQaElements.criarConta())
    .should('be.visible')
    .click()
  }
  
  
   /**
   * preencher o campo de senha.
   * @param {string} senha
   */
  criarSenha(senha) {
    const ds = dados.qaCommerceDados
    cy.get(loginQaElements.senha())
      .should('be.visible')
      .type(`${ds.senha}`)
  } 
  
  /**
   * preencher o campo confirmar senha.
   * @param {string} senha
   */
  confirmarSenha(senha) {
    const ds = dados.qaCommerceDados
    cy.get(loginQaElements.confirmarSenha())
      .should('be.visible')
      .type(`${ds.senha}`)
  } 

  /**
   * Formas de pagamento
   */
  checkoutFormasDepagamento() {
    cy.get(loginQaElements.formaPagamento())
      .should('be.visible')
      .click()
  }

  /**
   * Termo
   */
  /**
   * Formas de pagamento
   */
  checkoutTermo() {
    cy.get(loginQaElements.termo())
      .should('be.visible')
      .click()
  }

  btnFinalizarPedido() {
    cy.get(loginQaElements.btnFinalizarPedido())
    .should('be.visible')
    .click()
  }

  statusDoPedido() {
    cy.get(loginQaElements.statusPedido())
    .last()
    .should('contain.text', 'Pagamento aprovado');
  
  }

  validarAlertaCamposObrigatorios() {
  cy.get(loginQaElements.mensagemEsperada())
    .should('be.visible')
    .and('have.class', 'alert-danger')
    .and('contain.text', 'Por favor, preencha todos os campos obrigatório marcados com asteriscos!');
}


}

export const qaCommercePage = new QaCommercePage()
