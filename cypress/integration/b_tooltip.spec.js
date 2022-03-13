describe('Tooltip', () => {
  before(() => {
    // Visit the storybook iframe page once per file
    cy.visitStorybook();
  });

  // Note the use of `beforeEach`
  beforeEach(() => {
    // The first parameter is the category. This is the `title` in CSF or the value in `storiesOf`
    // The second parameter is the name of the story. This is the name of the function in CSF or the value in the `add`
    // This does not refresh the page, but will unmount any previous story and use the Storybook Router API to render a fresh new story
    cy.loadStory('ProgressBar', 'tooltip');
  });

  // ToolTip
  it('should contain tooltip', () => {
    cy.get("[class*='progressBarContainer']")
      .parent()
      .should('exist')
      .should('have.attr', 'data-tip', 'demo text');
  });

  it('tooltip must be shown on hover', () => {
    cy.get('[class^=progressBar]')
      .first()
      .trigger('mouseenter') // trigger mouse hover to show tooltip
      .get('[data-id^=tooltip]')
      .should('have.class', 'show');
  });
});
