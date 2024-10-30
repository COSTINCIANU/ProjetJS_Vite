// On affiche tout les tests dans le descraiber 

describe('template spec', () => {
  it('passes', () => {
    // On doit tjr luis donner l'URL de la page que on veux tester avec sette commande (cy.visit)
    cy.visit('https://index.html.cypress.io')
  })

  it('test 1', () => {
    cy.visit('https://example.cypress.io')
  })

  it('test 2', () => {
    cy.visit('https://example.cypress.io')
  })
})