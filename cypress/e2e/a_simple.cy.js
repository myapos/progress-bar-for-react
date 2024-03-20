describe('Simple', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // Simple example
  it('should assert Simple case styling', () => {
    cy.findByTestId('Simple').within(() => {
      cy.findByTestId('progress-bar')
        .should('exist')
        .should('have.css', 'display', 'flex')
        .should('have.css', 'align-items', 'center')
        .should('have.css', 'justify-content', 'center');
    });
  });

  it('simple progress bar css', () => {
    cy.findByTestId('Simple').within(() => {
      cy.findByTestId('progress-bar-child')
        .should('exist')
        .should('have.css', 'width', '85px')
        .should('have.css', 'border', '1px solid rgb(51, 51, 51)')
        .should('have.css', 'border-radius', '20px')
        .should('have.css', 'position', 'relative');
    });
  });

  it('simple filler css', () => {
    cy.findByTestId('Simple').within(() => {
      cy.findByTestId('filler')
        .should('exist')
        .should(
          'have.css',
          'background',
          'rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box',
        )
        .should('have.css', 'transition', 'width 0.2s ease-in 0s')
        .should('have.css', 'border-radius', '20px')
        .should('have.css', 'height', '15px')
        .should('have.css', 'width', '42.5px');
    });
  });
});
