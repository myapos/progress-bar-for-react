// https://medium.com/@mtiller/testing-react-components-using-storybook-and-cypress-1689a27f55aa
describe('progress bar styles', () => {
  before(() => {
    cy.visit('http://localhost:2233');
  });

  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});
