context('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('I should see home of Pokedingo', () => {
        cy.get('.header');
        cy.get('.card');
        cy.get('.layout > div > div:nth-child(2) > h1').contains("bulbasaur");
    });

    it('I want order pokemon', () => {
        cy.get('.home__filter');
        cy.get('.layout > div > div:nth-child(2) > h1').contains("bulbasaur");
        cy.get('.home__filter .home__filter-select').select('name')
        cy.get('.layout > div > div:nth-child(2) > h1').contains("arbok");
    });

    it('I want display pokemon info and hide modal', () => {
        cy.get('.layout > div > div:nth-child(2) > .card__picture').click();
        cy.get(".modal");
        cy.get('.modal__container-header > button').click();
    });
});