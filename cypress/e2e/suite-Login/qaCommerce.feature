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

 
