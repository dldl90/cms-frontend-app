// https://on.cypress.io/custom-commands

Cypress.Commands.add('dragSlide', (elem, dragStartPosition, dragEndPosition) => {
  cy.get(elem)
    .trigger('mousedown', { position: dragStartPosition, which: 1 })
    .trigger('mousemove', { clientX: dragEndPosition })
    .trigger('mouseup', { force: true });
});
