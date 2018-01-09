describe('Facebook', function() {
    before(function() {
        cy.visit('https://www.facebook.com');
    });
    it('<title> is "facebook"', function() {
        cy.title().should('include', 'Google');
    });
});
