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
    cy.findByTestId('filler')
      .should('exist')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');

    // cy.get("[class*='progressBarContainer'] > div")
    cy.findByTestId('progress-bar-child')
      .should('exist')
      .should('have.css', 'border', '1px solid rgb(0, 0, 255)')
      .should('have.css', 'border-radius', '1px')
      .should('have.css', 'width', '200px')
      .should('have.css', 'height', '50px')
      .should('have.css', 'position', 'relative');
  });
});
