
describe('Orçamentos', () => {
    it('Calcular orçamento valido', () => {
      cy.visit('/index.html'); 

      criarOrçamento(30, 1, 1); // Crie a função para deixar o teste com menos código

      cy.get('#resultadoOrcamento').should('contain', 'Orçamento total: R$ 1530.00'); // Validação criação de um orçamento correto
    });

    it('Calcular orçamento invalido', () => {
        cy.visit('/index.html'); 

        criarOrçamento(30, 1, 1000000000);

        cy.get('#resultadoOrcamento').should('contain', 'Orçamento total: R$ 5000.00');  // Validação orçamento incorreto
  });
});

function criarOrçamento(valorPassagem, numeroPessoas, diasHospedagem) {
  cy.get('#valorPassagem').type(valorPassagem);
  cy.get('#numeroPessoas').type(numeroPessoas);
  cy.get('#diasHospedagem').type(diasHospedagem);
  cy.get('#dataNascimento').type("1990-02-15"); 
  cy.contains('button', 'Calcular').click();
}
