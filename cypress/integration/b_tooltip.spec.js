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
    cy.get("[class*='tooltip']")
      .should('exist')
      .contains('demo text')
      .should('exist');
  });

  it('should show tooltip on hover', () => {
    cy.get("[class*='progressBarContainer']").should('exist');

    cy.get("[class*='progressBarContainer']").realHover();

    cy.get("[class*='tooltiptext']").should('be.visible');
  });
});
