describe('Google', function() {
    it('<title> is "Google"', function() {
        cy.visit('https://www.google.com');
        cy.title().should('include', 'Google');
    });
});
