// Description du groupe de tests pour l'application de compteur
describe('Application de compteur', () => {

    // Avant chaque test, visite la page de l'application
    // Charge notre application locale
    beforeEach(() => {
        cy.visit('counter.html'); 
    });

    // Test pour vérifier l'affichage initial du compteur
    // Sélectionne l'élément du compteur
    // Vérifie que le texte est 0
    it('affiche le compteur à 0 au début', () => {
        cy.get('#counter').should('have.text', '0'); 
    });

    // Test pour vérifier l'incrémentation du compteur
    // Sélectionne le bouton d'incrémentation
    // Simule un clic
    // Sélectionne l'élément du compteur
    // Vérifie que le compteur est passé à 1
    it('incrémente le compteur de 1 au clic', () => {
        cy.get('#increment-btn').click();
        cy.get('#counter').should('have.text', '1');    
    });

    // Test pour plusieurs clics et vérifier l'incrémentation
    // Sélectionne le bouton
    // Clic pour incrémenter de 1 à 3
    // Sélectionne le compteur
    // Vérifie que le compteur est à 3
    it('incrémente le compteur correctement après plusieurs clics', () => {
        cy.get('#increment-btn').click().click().click(); 
        cy.get('#counter').should('have.text', '3'); 
    });
});
