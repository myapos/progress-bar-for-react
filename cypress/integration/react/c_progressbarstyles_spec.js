describe('Progress bar styles', () => {
  before(() => {
    cy.viewport(1200, 600);
    cy.visit('http://localhost:2222');
  });

  it('progress bar container filler css', () => {
    cy.get('#ProgressBarStyles #container > div > div > div').then((div) => {
      const element = div[0];

      const styles = window.getComputedStyle(element, null);
      const backgroundColor = styles.getPropertyValue('background-color');
      // test css styling
      expect(backgroundColor).to.include('rgb(0, 0, 255)');
    });

    cy.get('#ProgressBarStyles #container > div > div').then((div) => {
      const element = div[0];

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
