context('Announcement', () => {
  it('successfully loads the page', function() {
    cy.visit('/email/unsubscribe-success');
  });

  describe('content', () => {
    const AnnouncementHeading = '[data-testid="Heading"]';
    const AnnouncementrichTextEditor = '[data-testid="RichTextEditor"]';
    const AnnouncementButton = '[data-testid="Button"]';

    describe('on mobile', () => {
      beforeEach(() => {
        cy.viewport('iphone-6');
      });

      it('displays the page heading', () => {
        cy.get(AnnouncementHeading).should('be.visible');
      });

      it('displays the main body copy', () => {
        cy.get(AnnouncementrichTextEditor).should('be.visible');
      });

      it('displays the CTA button', () => {
        cy.get(AnnouncementButton).should('be.visible');
      });
    });

    describe('on desktop', () => {
      beforeEach(() => {
        cy.viewport('macbook-13');
      });

      it('displays the page heading', () => {
        cy.get(AnnouncementHeading).should('be.visible');
      });

      it('displays the main body copy', () => {
        cy.get(AnnouncementrichTextEditor).should('be.visible');
      });

      it('displays the CTA button', () => {
        cy.get(AnnouncementButton).should('be.visible');
      });
    });
  });
});
