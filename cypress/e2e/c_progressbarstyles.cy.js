describe('Progress bar styles', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // ProgressBarStyles example
  it('progress bar container filler css', () => {
    cy.findByTestId('ProgressBarStyles').within(() => {
      cy.findByTestId('filler')
        .should('exist')
        .should('have.css', 'background-color', 'rgb(0, 0, 255)');

      // cy.get("[class*='progressBarContainer'] > div")
      cy.findByTestId('progress-bar-child')
        .should('exist')
        .should('have.css', 'border', '1px solid rgb(0, 0, 255)')
        .should('have.css', 'border-radius', '1px')
        .should('have.css', 'width', '200px')
        .should('have.css', 'height', '50px')
        .should('have.css', 'position', 'relative');
    });
  });
});
