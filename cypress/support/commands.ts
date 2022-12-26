/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      addReservationDetails(reservation: WaitingListForm): Chainable<Element>;
    }
  }
}


import { WaitingListForm } from 'types';

Cypress.Commands.add('addReservationDetails', (reservation: WaitingListForm) => {
  // <input>
  for (const [key, value] of Object.entries(reservation.input)) {
    cy.get(`[name="${key}"]`).type(value, { force: true });
  }

  // <select>
  for (const [key, value] of Object.entries(reservation.selected)) {
    cy.get(`[name="${key}"]`).select(value, { force: true });
  }
});