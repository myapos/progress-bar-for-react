function iget(doc, selector) {
  return cy.wrap(doc.find(selector));
}
// https://medium.com/@mtiller/testing-react-components-using-storybook-and-cypress-1689a27f55aa
describe('Extrastyles', () => {
  before(() => {
    // Visit the storybook iframe page once per file
    cy.visitStorybook();
  });

  // Note the use of `beforeEach`
  beforeEach(() => {
    // The first parameter is the category. This is the `title` in CSF or the value in `storiesOf`
    // The second parameter is the name of the story. This is the name of the function in CSF or the value in the `add`
    // This does not refresh the page, but will unmount any previous story and use the Storybook Router API to render a fresh new story
    cy.loadStory('ProgressBar', 'extra_styles');
  });

  it('extra filler css', () => {
    cy.get("[class*='progressBarContainer'] > div > div")
      .should('exist')
      .then(([element, ...rest]) => {
        const className = element.className;

        const styles = window.getComputedStyle(element, null);
        const backgroundColor = styles.getPropertyValue('background-color');

        // test css styling
        expect(backgroundColor).to.include('rgb(0, 0, 255)');
      });
  });
});
