// @ts-nocheck
// https://medium.com/@mtiller/testing-react-components-using-storybook-and-cypress-1689a27f55aa
describe('On percentage change', () => {
  const TIMER = 1000;

  beforeEach(() => {
    cy.visit('/');
  });

  // ClockedProgressBar
  it('progress bar container on percentage change calls', () => {
    cy.findByTestId('ProgressBarStyles').within(() => {
      cy.window().then((win) => {
        let window_ = win;
        let { onPercentageChange } = window_;
        let shouldGoOneLevelUp = typeof onPercentageChange === 'undefined';

        // search the window scopes to find the onPercentage change funciton handler
        const MAX_LOOPS = 10;
        let count = 0;

        while (shouldGoOneLevelUp) {
          onPercentageChange = window_.onPercentageChange;
          shouldGoOneLevelUp = typeof onPercentageChange === 'undefined';

          window_ = window_.parent;
          console.log('looping window scopes', window_, ' count', count);

          count++;

          if (count > MAX_LOOPS) {
            break;
          }
        }

        if (onPercentageChange) {
          const spy = cy.spy(top, 'onPercentageChange'); //.as('anyArgs');
          setTimeout(function () {
            // let some time and then check function calls
            console.log(`Time passed ${TIMER}`);
            expect(spy).to.be.called;
          }, TIMER);
        } else {
          cy.log('Check the value of onPercentageChange function handler');
        }
      });
    });
  });
});
