describe('Simple', () => {
  before(() => {
    cy.viewport(1200, 600);
    cy.visit('http://localhost:2222');
  });

  it('should assert Simple case styling', () => {
    cy.get('#Simple > #container > div').then((div) => {
      const element = div[0];

      const className = element.className;

      expect(className).to.match(/progressBarContainer-/);

      const styles = window.getComputedStyle(element, null);
      const display = styles.getPropertyValue('display');
      const alignItems = styles.getPropertyValue('align-items');
      const justifyContent = styles.getPropertyValue('justify-content');

      // test css styling
      expect(display).to.include('flex');
      expect(alignItems).to.include('center');
      expect(justifyContent).to.include('center');
    });
  });

  it('simple progress bar css', () => {
    cy.get('#Simple > #container > div > div').then((div) => {
      const element = div[0];

      const className = element.className;

      expect(className).to.match(/progressBar-/);

      const styles = window.getComputedStyle(element, null);
      const width = styles.getPropertyValue('width');
      const border = styles.getPropertyValue('border');
      const position = styles.getPropertyValue('position');
      const borderRadius = styles.getPropertyValue('border-radius');

      // test css styling
      expect(width).to.include('85px');
      expect(border).to.include('1px solid rgb(51, 51, 51)');
      expect(borderRadius).to.include('20px');
      expect(position).to.include('relative'); // this values is generated by cypress
    });
  });

  it('simple filler css', () => {
    cy.get('#Simple > #container > div > div > div').then((div) => {
      const element = div[0];

      const className = element.className;

      expect(className).to.match(/filler-/);
      expect(element.style.cssText).to.equal('width: 50%;');

      const styles = window.getComputedStyle(element, null);
      const background = styles.getPropertyValue('background');
      const transition = styles.getPropertyValue('transition');
      const borderRadius = styles.getPropertyValue('border-radius');
      const height = styles.getPropertyValue('height');

      // test css styling
      expect(background).to.include('rgb(0, 0, 0)');
      expect(transition).to.include('width 0.2s ease-in 0s');
      expect(borderRadius).to.include('20px');
      expect(height).to.include('15px'); // this values is generated by cypress
    });
  });
});
