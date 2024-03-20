describe('Tooltip', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // ToolTip example
  it('should contain tooltip', () => {
    cy.findByTestId('ToolTip').within(() => {
      cy.findByTestId('tooltip')
        .should('exist')
        .contains('demo text')
        .should('exist');
    });
  });

  it('should show tooltip on hover', () => {
    cy.findByTestId('ToolTip').within(() => {
      cy.findByTestId('progress-bar').should('exist');
      cy.findByTestId('progress-bar').realHover();
      cy.findByTestId('tooltiptext').should('be.visible');
    });
  });
});
