context('Shop', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('I should add bulbasaur in cart', () => {
        cy.get('.header > ul > .header__menu-item.header__menu-item--bullet > span').contains(0);
        cy.get('.layout > div > div:nth-child(2) > div.card__actions > div > button').click();
        cy.get('.header > ul > .header__menu-item.header__menu-item--bullet > span').contains(1);
    });

    it('I should add two bulbasaur in cart', () => {
        cy.get('.header > ul > .header__menu-item.header__menu-item--bullet > span').contains(0);
        cy.get('.layout > div > div:nth-child(2) > div.card__actions > div > button').click();
        cy.get('.header > ul > .header__menu-item.header__menu-item--bullet > span').contains(1);
        cy.get('.header > ul > .header__menu-item.header__menu-item--bullet > button').click();
        cy.get('.shopInfo__container-card .card__info > .card__info-quantity').contains(1);
        cy.get('.shopInfo__container-card .card__actions > div:nth-child(1) > button:nth-child(1)').click();
        cy.get('.shopInfo__container-card .card__info > .card__info-quantity').contains(2);
    });

    it('I want remove bulbasaur of my cart', () => {
        cy.get('.layout > div > div:nth-child(2) > div.card__actions > div > button').click();
        cy.get('.header > ul > .header__menu-item.header__menu-item--bullet > button').click();
        cy.get('.shopInfo__container-card .card__actions > div:nth-child(2) > button').click();
        cy.get('.shopInfo .shopInfo__empty').contains('Your Shopping Cart is empty.');
    });
});