describe('Simple', () => {
  before(() => {
    // Visit the storybook iframe page once per file
    cy.visitStorybook();
  });

  // Note the use of `beforeEach`
  beforeEach(() => {
    // The first parameter is the category. This is the `title` in CSF or the value in `storiesOf`
    // The second parameter is the name of the story. This is the name of the function in CSF or the value in the `add`
    // This does not refresh the page, but will unmount any previous story and use the Storybook Router API to render a fresh new story
    cy.loadStory('ProgressBar', 'Simple');
  });

  it('should assert Simple case styling', () => {
    cy.findByTestId('progress-bar')
      .should('exist')
      .should('have.css', 'display', 'flex')
      .should('have.css', 'align-items', 'center')
      .should('have.css', 'justify-content', 'center');
  });

  it('simple progress bar css', () => {
    cy.findByTestId('progress-bar-child')
      .should('exist')
      .should('have.css', 'width', '85px')
      .should('have.css', 'border', '1px solid rgb(51, 51, 51)')
      .should('have.css', 'border-radius', '20px')
      .should('have.css', 'position', 'relative');
  });

  it('simple filler css', () => {
    cy.findByTestId('filler')
      .should('exist')
      .should(
        'have.css',
        'background',
        'rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'
      )
      .should('have.css', 'transition', 'width 0.2s ease-in 0s')
      .should('have.css', 'border-radius', '20px')
      .should('have.css', 'height', '15px')
      .should('have.css', 'width', '42.5px');
  });
});
