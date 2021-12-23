// Helper func to access Storybook "showcase" iframe
function iget(doc, selector) {
  return cy.wrap(doc.find(selector));
}

// https://medium.com/@mtiller/testing-react-components-using-storybook-and-cypress-1689a27f55aa
describe('Tooltip', () => {
  before(() => {
    cy.viewport(1200, 600);
    cy.visit('http://localhost:2233');
    cy.get('#tooltip').click();
  });

  it('progress bar container css', () => {
    cy.get('#storybook-preview-iframe').then(($iframe) => {
      const doc = $iframe.contents();

      iget(doc, '#container > div').should(
        'have.attr',
        'data-tip',
        'demo text'
      );
    });
  });

  it('progress bar tooltip must be shown on hover', () => {
    cy.get('#storybook-preview-iframe').then(($iframe) => {
      console.log('$iframe', $iframe);
      const doc = $iframe.contents();

      cy.get(doc[0].body).within(() => {
        cy.get('[class^=progressBar]')
          .then((l) => l[1])
          .trigger('mouseenter') // trigger mouse hover to show tooltip
          .get('[data-id^=tooltip]')
          .should('have.class', 'show');
      });
    });
  });
});
