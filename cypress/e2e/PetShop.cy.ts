const reservation = {
    input: {
        firstName: 'Brian',
        lastName: 'Udensi',
        puppyName: 'Pablo',
        arrival: '2023-01-12T14:30',
    },
    selected: {
        requestedService: 'Full Body Shave',
    }
}

describe('Pet Shop', () => {
    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:3000/waiting-list.json'
        }, {
            fixture: 'reservations'
        }).as('petShopConfigRoute');
        cy.visit('/');
    });

    describe('reservations', () => {
        beforeEach(() => {
            cy.wait('@petShopConfigRoute');
        });

        it('loads list', () => {
            cy.get('[data-testid="reservation-list"]').its('length').should('eq', 4);
        });

        it('add reservation', () => {
            const selector = '[aria-label="Close"]';

            cy.get('[data-testid="add-reservation"]').click({force: true });
            cy.addReservationDetails(reservation);
            cy.get('[data-testid="submit-reservation"]').click();
            cy.get('[data-testid="reservation-list"]').its('length').should('eq', 5);
            cy.get(selector).click();
        });

        it('removes reservation', () => {
            cy.get('[data-testid="delete-reservation"]').eq(0).click();
            cy.get('[data-testid="remove-reservation"]').click();
            cy.get('[data-testid="reservation-list"]').its('length').should('eq', 3);
        });

        it('marks as serviced', () => {
            cy.get('[data-testid="unserviced"]').eq(0).click();
            cy.get('[data-testid="serviced"]').its('length').should('eq', 2);
        });

        it('marks as unserviced', () => {
            cy.get('[data-testid="serviced"]').eq(0).click();
            cy.get('[data-testid="unserviced"]').its('length').should('eq', 4);
        });

        it('filters services', () => {
            cy.get('[data-testid="filter-serviced"]').click();
            cy.get('[data-testid="reservation-list"]').its('length').should('eq', 1);

            cy.get('[data-testid="filter-unserviced"]').click();
            cy.get('[data-testid="reservation-list"]').its('length').should('eq', 3);

            cy.get('[data-testid="filter-all"]').click();
            cy.get('[data-testid="reservation-list"]').its('length').should('eq', 4);
        });

        it('returns search result', () => {
            cy.get('input[name=search-input]').type('ob');
            cy.get('[data-testid="reservation-list"]').its('length').should('eq', 2);
        });
    });
});