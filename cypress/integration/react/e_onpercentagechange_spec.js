function iget(doc, selector) {
  return cy.wrap(doc.find(selector));
}

// https://medium.com/@mtiller/testing-react-components-using-storybook-and-cypress-1689a27f55aa
describe('On percentage change', () => {
  const TIMER = 1000;

  before(() => {
    cy.viewport(1200, 600);
    cy.visit('http://localhost:3000');
  });

  it('progress bar container on percentage change calls', () => {
    cy.window().then((win) => {
      const top = win.top;
      const onPercentageChange = top.onPercentageChange;
      const spy = cy.spy(top, 'onPercentageChange'); //.as('anyArgs');
      setTimeout(function () {
        // let some time and then check function calls
        console.log(`Time passed ${TIMER}`);
        expect(spy).to.be.called;
      }, TIMER);
    });
  });
});
