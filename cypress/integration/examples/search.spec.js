context('Search', () => {
    it('I want find mew', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.header > ul > li:nth-child(1)').click();
        cy.url().should('eq', 'http://localhost:3000/search');
        cy.get('.search__container-input').type('mew');
        cy.get('.search__container-button').click();
        cy.get('.card .card__title').contains('mew');
    });

    it('I search an unknown pokemon', () => {
        cy.visit('http://localhost:3000/search');
        cy.get('.search__container-input').type('Bolognaise');
        cy.get('.search__container-button').click();
        cy.get('.search__result-error').contains('Bolognaise is unknow');
    })
});