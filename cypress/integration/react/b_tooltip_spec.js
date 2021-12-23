describe('Tooltip', () => {
  before(() => {
    cy.viewport(1200, 600);
    cy.visit('http://localhost:3000');
  });

  it('should assert that true is equal to true', () => {
    expect(true).to.equal(true);
  });

  // ToolTip
  it('should contain tooltip', () => {
    cy.get('#ToolTip > #container > div').should(
      'have.attr',
      'data-tip',
      'demo text'
    );
  });

  it.only('tooltip must be shown on hover', () => {
    cy.get('[class^=progressBar]')
      .first()
      .trigger('mouseenter') // trigger mouse hover to show tooltip
      .get('[data-id^=tooltip]')
      .should('have.class', 'show');
  });
});
