Projeto de Automação de Testes - Cypress + Cucumber + JavaScript

Tecnologias Utilizadas
- JavaScript – linguagem principal do projeto
- Cypress – framework de automação de testes
- Cucumber – escrita de cenários em Gherkin
- Node.js – ambiente de execução

Requisitos de Instalação
Antes de começar, instale:
• Node.js (v18+)
• Git

# 1. Clone o repositório
git clone https://github.com/seu-usuario/nome-do-projeto.git

# 2. Acesse a pasta do projeto
cd nome-do-projeto

# 3. Instale as dependências
npm install

Configuração do Cypress + Cucumber
Certifique-se de que os seguintes arquivos estão configurados:
package.json:
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true,
  "stepDefinitions": "cypress/e2e"
}

cypress.config.js:
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "**/*.feature"
  }
});

Execução dos Testes
Interface Visual (Cypress GUI):
Alterar o email no arquivo database.json  localizado na pasta fixtures/login 
npx cypress open

Escolha o cenário .feature desejado para executar o teste.
Linha de comando (headless):
npx cypress run

Feature: Acessar o sistema de e-Commerce 

  Background: 

  Scenario: 01 - Adicionar Produto ao Carrinho
    Given que acessei o eCommerce
    When que realizei a seleção de produtos para o carrinho
    Then os produtos foram inseridos no carrinho com sucesso

  Scenario: 02 - Checkout Simples 
    Given que acessei o eCommerce
    When que realizei a seleção de produtos
    And que preenchi os dados para entrega 
    Then o pedido é realizado com sucesso

  Scenario: 03 - Validação de Campos Obrigatórios 
    Given que acessei o eCommerce
    When que realizei a seleção de produtos
    Then então validei as mensagens de erros no preenchimento dos campos obrigatórios

  Scenario: 04 -  Post de login bem-sucedido via API
    Given que o usuário possui credenciais válidas
    When ele envia uma requisição de login
    Then deve receber uma resposta de sucesso

  Scenario: 05 - Get de requiosição do carrinho 
    Given que o usuário está autenticado e possui um carrinho
    When ele envia uma requisição para listar os itens do carrinho
    Then ele deve receber uma lista de itens do carrinho com status 200