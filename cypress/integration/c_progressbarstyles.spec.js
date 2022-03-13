describe('Progress bar styles', () => {
  before(() => {
    // Visit the storybook iframe page once per file
    cy.visitStorybook();
  });

  // Note the use of `beforeEach`
  beforeEach(() => {
    // The first parameter is the category. This is the `title` in CSF or the value in `storiesOf`
    // The second parameter is the name of the story. This is the name of the function in CSF or the value in the `add`
    // This does not refresh the page, but will unmount any previous story and use the Storybook Router API to render a fresh new story
    cy.loadStory('ProgressBar', 'progress_bar_styles');
  });

  it('progress bar container filler css', () => {
    cy.get("[class*='progressBarContainer'] > div > div")
      .should('exist')
      .then(([element, ...rest]) => {
        const styles = window.getComputedStyle(element, null);
        const backgroundColor = styles.getPropertyValue('background-color');
        // test css styling
        expect(backgroundColor).to.include('rgb(0, 0, 255)');
      });

    cy.get("[class*='progressBarContainer'] > div")
      .should('exist')
      .then(([element, ...rest]) => {
        const styles = window.getComputedStyle(element, null);
        const border = styles.getPropertyValue('border');
        const borderRadius = styles.getPropertyValue('border-radius');
        const width = styles.getPropertyValue('width');
        const height = styles.getPropertyValue('height');
        const position = styles.getPropertyValue('position');

        // test css styling
        expect(border).to.include('1px solid rgb(0, 0, 255)');
        expect(borderRadius).to.include('1px');
        expect(width).to.include('200px');
        expect(height).to.include('50px');
        expect(position).to.include('relative');
      });
  });
});
