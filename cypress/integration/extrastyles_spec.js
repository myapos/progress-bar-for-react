function iget(doc, selector) {
  return cy.wrap(doc.find(selector));
}
// https://medium.com/@mtiller/testing-react-components-using-storybook-and-cypress-1689a27f55aa
describe('extrastyles', () => {
  before(() => {
    cy.viewport(1200, 600);
    cy.visit('http://localhost:2233');
    cy.get('a[title="ExtraStyles"]').click();
  });

  it('extra filler css', () => {
    cy.get('#storybook-preview-iframe').then(($iframe) => {
      const doc = $iframe.contents();

      iget(doc, '#container > div > div > div').then((div) => {
        const element = div[0];

        const className = element.className;

        const styles = window.getComputedStyle(element, null);
        const backgroundColor = styles.getPropertyValue('background-color');
        // test css styling
        expect(backgroundColor).to.include('rgb(255, 0, 0)');
      });
    });
  });
});
