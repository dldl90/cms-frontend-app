context('Homepage', () => {
  it('successfully loads the page', () => {
    cy.visit('/');
  });

  describe('UspBanner', () => {
    const desktopView = '[data-testid="UspBanner-ResponsiveViewDesktop"]';
    const mobileView = '[data-testid="UspBanner-ResponsiveViewMobile"]';
    const firstSlide = `${mobileView} [data-index="0"]`;
    const secondSlide = `${mobileView} [data-index="1"]`;

    describe('on mobile', () => {
      beforeEach(() => {
        cy.viewport('iphone-6');
      });

      it('shows the mobile version of the UspBanner', () => {
        cy.get(mobileView).should('be.visible');
        cy.get(desktopView).should('not.be.visible');
      });

      it('should animate', () => {
        cy.get(firstSlide).should('have.class', 'slick-current');
        cy.get(secondSlide).should('not.have.class', 'slick-current');
        cy.get(secondSlide).should('have.class', 'slick-current');
        cy.get(firstSlide).should('not.have.class', 'slick-current');
      });

      it('should allow user to swipe through the carousel', () => {
        cy.visit('/');
        cy.dragSlide(firstSlide, 'right', -200);
        cy.get(secondSlide).should('be.visible');
        cy.get(firstSlide).should('not.be.visible');
      });
    });

    describe('on desktop', () => {
      beforeEach(() => {
        cy.viewport('macbook-13');
      });
      it('shows the desktop version of the UspBanner', () => {
        cy.get(desktopView).should('be.visible');
        cy.get(mobileView).should('not.be.visible');
      });
    });
  });

  describe('section one hero banner', () => {
    const banner = '[data-testid="Homepage-HeroBanner"]';
    const ctaButton = `${banner} span`;

    describe('on mobile', () => {
      beforeEach(() => {
        cy.viewport('iphone-6');
      });
      it('should include the CTA button and href', () => {
        cy.get(banner).should('be.visible');
        cy.get(banner).should('have.attr', 'href');
        cy.get(ctaButton).should('be.visible');
      });
    });

    describe('on desktop', () => {
      beforeEach(() => {
        cy.viewport('macbook-13');
      });
      it('should include the CTA button and href', () => {
        cy.get(banner).should('be.visible');
        cy.get(banner).should('have.attr', 'href');
        cy.get(ctaButton).should('be.visible');
      });
    });
  });

  describe('section three product carousel', () => {
    const sectionThree = '[data-testid="Homepage-SectionThree"]';
    const firstSlide = `${sectionThree} [data-index="0"]`;
    const secondSlide = `${sectionThree} [data-index="1"]`;
    const thirdSlide = `${sectionThree} [data-index="2"]`;

    describe('on mobile', () => {
      beforeEach(() => {
        cy.viewport('iphone-6');
      });
      it('shows one image in the carousel', () => {
        cy.get(firstSlide).should('be.visible');
        cy.get(thirdSlide).should('not.be.visible');
      });
      it('should allow user to swipe through the carousel', () => {
        cy.dragSlide(firstSlide, 'right', -200);
        cy.get(thirdSlide).should('be.visible');
        cy.get(firstSlide).should('not.be.visible');
      });
    });

    describe('on desktop', () => {
      it('shows all three images in the carousel', () => {
        cy.viewport('macbook-13');
        cy.get(firstSlide).should('be.visible');
        cy.get(secondSlide).should('be.visible');
        cy.get(thirdSlide).should('be.visible');
      });
    });
  });

  describe('section four recently viewed carousel', () => {
    const recentlyViewedCarousel = '[data-testid="RecentlyViewedCarousel"]';
    const firstSlide = '[data-testid="RecentlyViewedCarousel-slider"] [data-index="0"]';
    const fourthSlide = '[data-testid="RecentlyViewedCarousel-slider"] [data-index="3"]';
    const sixthSlide = '[data-testid="RecentlyViewedCarousel-slider"] [data-index="5"]';
    const eighthSlide = '[data-testid="RecentlyViewedCarousel-slider"] [data-index="7"]';

    describe('with no recentlyViewedProducts in localStorage', () => {
      it('should not show recentlyViewedCarousel', () => {
        cy.get(recentlyViewedCarousel).should('not.be.visible');
      });
    });

    describe('with recentlyViewedProducts in localStorage', () => {
      beforeEach(() => {
        cy.fixture('recentlyViewedProducts').then(recentlyViewed => {
          window.localStorage.setItem('recentlyViewedProducts', JSON.stringify(recentlyViewed));
        });
        cy.visit('/');
      });

      describe('on mobile', () => {
        beforeEach(() => {
          cy.viewport('iphone-6');
        });

        it('should show two images in the recentlyViewedCarousel', () => {
          cy.get(recentlyViewedCarousel).should('be.visible');
          cy.get(firstSlide).should('be.visible');
          cy.get(fourthSlide).should('not.be.visible');
        });

        it('should allow user to swipe through the carousel', () => {
          cy.dragSlide(firstSlide, 'right', -200);
          cy.get(fourthSlide).should('be.visible');
        });
      });

      describe('on desktop', () => {
        beforeEach(() => {
          cy.viewport('macbook-13');
        });

        it('should show six images in the recentlyViewedCarousel', () => {
          cy.get(recentlyViewedCarousel).should('be.visible');
          cy.get(firstSlide).should('be.visible');
          cy.get(sixthSlide).should('be.visible');
          cy.get(eighthSlide).should('not.be.visible');
        });

        it('should allow user to show the next 6 products when they click on the carousel arrow', () => {
          const carouselButtonRight = '[data-testid="RecentlyViewedCarousel-slider"] .slick-next';
          cy.get(eighthSlide).should('not.be.visible');
          cy.get(carouselButtonRight).trigger('click');
          cy.get(eighthSlide).should('be.visible');
        });
      });
    });
  });

  describe('section five partner section', () => {
    describe('on mobile', () => {
      it('does not display partner product images on mobile', () => {
        cy.viewport('iphone-6');
        cy.get('[data-testid="PartnersSmallImage"]').should('not.be.visible');
      });
    });

    describe('on desktop', () => {
      it('displays partner product images on desktop', () => {
        cy.viewport('macbook-13');
        cy.get('[data-testid="PartnersSmallImage"]').should('be.visible');
      });
    });
  });
});
