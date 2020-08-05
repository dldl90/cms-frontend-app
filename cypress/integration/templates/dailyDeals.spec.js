context('DailyDeals', () => {
  describe('Daily Deals Page when Sale not ened', () => {
    it('successfully loads the page', () => {
      cy.visit('/campaign/daily-wonders');
    });

    describe('HeroBanner', () => {
      const heading = '[data-testid="HeroBanner"]';

      describe('on mobile', () => {
        beforeEach(() => {
          cy.viewport('iphone-6');
        });

        it('shows the HeroBanner', () => {
          cy.get(heading).should('be.visible');
        });
      });

      describe('on desktop', () => {
        beforeEach(() => {
          cy.viewport('macbook-13');
        });
        it('shows the HeroBanner', () => {
          cy.get(heading).should('be.visible');
        });
      });
    });

    describe('HeadingSection', () => {
      const heading = '[data-testid="HeadingSection"]';

      describe('on mobile', () => {
        beforeEach(() => {
          cy.viewport('iphone-6');
        });

        it('hides the headingSection', () => {
          cy.get(heading).should('not.be.visible');
        });
      });

      describe('on desktop', () => {
        beforeEach(() => {
          cy.viewport('macbook-13');
        });
        it('shows the headingSection', () => {
          cy.get(heading).should('be.visible');
        });
      });
    });

    describe('DealBlocks', () => {
      const dealBlock = '[data-testid="DealBlock"]';

      describe('on mobile', () => {
        beforeEach(() => {
          cy.viewport('iphone-6');
        });

        it('shows the dealBlock', () => {
          cy.get(dealBlock).should('be.visible');
        });
      });

      describe('on desktop', () => {
        beforeEach(() => {
          cy.viewport('macbook-13');
        });
        it('shows the headingSection', () => {
          cy.get(dealBlock).should('be.visible');
        });
      });
    });

    describe('CTA button', () => {
      const ctaButtonDesktop = '[data-testid="CTAButton-Desktop"]';
      const ctaButtonMobile = '[data-testid="CTAButton-Mobile"]';

      describe('on mobile', () => {
        beforeEach(() => {
          cy.viewport('iphone-6');
        });

        it('hides the Desktop CTA Button', () => {
          cy.get(ctaButtonDesktop).should('not.be.visible');
        });

        it('shows the Mobile CTA Button', () => {
          cy.get(ctaButtonMobile).should('be.visible');
        });
      });

      describe('on desktop', () => {
        beforeEach(() => {
          cy.viewport('macbook-13');
        });
        it('shows the Desktop CTA Button', () => {
          cy.get(ctaButtonDesktop).should('be.visible');
        });

        it('hides the Mobile CTA Button', () => {
          cy.get(ctaButtonMobile).should('not.be.visible');
        });
      });
    });
  });

  describe('Daily deals page when sale ended', () => {
    it('successfully loads the page', () => {
      cy.visit('/campaign/daily-wonders?testSaleEnded=true');
    });

    const dealEnd = '[data-testid="DealEnd"]';

    describe('on mobile', () => {
      beforeEach(() => {
        cy.viewport('iphone-6');
      });

      it('shows the DealEnd component', () => {
        cy.get(dealEnd).should('be.visible');
      });
    });

    describe('on desktop', () => {
      beforeEach(() => {
        cy.viewport('macbook-13');
      });
      it('shows the DealEnd component', () => {
        cy.get(dealEnd).should('be.visible');
      });
    });
  });
});
