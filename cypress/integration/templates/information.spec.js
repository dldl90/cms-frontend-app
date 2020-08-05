context('Information', () => {
  it('successfully loads the page', () => {
    cy.visit('/about/shopper-terms');
  });

  describe('TextTemplate', () => {
    const infoHeading = '[data-testid="TextTemplate-InfoHeading"]';
    const richTextEditor = '[data-testid="RichTextEditor"]';

    describe('content', () => {
      describe('on mobile', () => {
        beforeEach(() => {
          cy.viewport('iphone-6');
        });

        it('shows infoHeading', () => {
          cy.get(infoHeading).should('be.visible');
        });

        it('shows richTextEditor', () => {
          cy.get(richTextEditor).should('be.visible');
        });
      });

      describe('on desktop', () => {
        beforeEach(() => {
          cy.viewport('macbook-13');
          it('shows infoHeading', () => {
            cy.get(infoHeading).should('be.visible');
          });
        });

        it('shows infoHeading', () => {
          cy.get(infoHeading).should('be.visible');
        });

        it('shows richTextEditor', () => {
          cy.get(richTextEditor).should('be.visible');
        });
      });
    });
  });
});
