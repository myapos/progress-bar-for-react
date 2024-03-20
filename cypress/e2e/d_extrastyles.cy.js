function iget(doc, selector) {
  return cy.wrap(doc.find(selector));
}
describe('Extrastyles', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // ExtraStyles example
  it('extra filler css', () => {
    cy.findByTestId('ProgressBarStyles').within(() => {
      cy.findByTestId('filler')
        .should('exist')
        .should('have.css', 'background-color', 'rgb(0, 0, 255)');
    });
  });
});
