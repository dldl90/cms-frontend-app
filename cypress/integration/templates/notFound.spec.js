context('NotFound', () => {
  it('successfully loads the page', () => {
    cy.visit('/pageNotFound', { failOnStatusCode: false });
  });

  describe('Heading', () => {
    const heading = '[data-testid="NotFound-InfoHeading"]';

    describe('on mobile', () => {
      beforeEach(() => {
        cy.viewport('iphone-6');
      });

      it('shows the Heading', () => {
        cy.get(heading).should('be.visible');
      });
    });

    describe('on desktop', () => {
      beforeEach(() => {
        cy.viewport('macbook-13');
      });

      it('shows the Heading', () => {
        cy.get(heading).should('be.visible');
      });
    });
  });

  describe('Search Form', () => {
    describe('on mobile', () => {
      beforeEach(() => {
        cy.viewport('iphone-6');
      });

      it('should not display a card background', () => {
        const DropShadowCard = '[data-testid="NotFound-DropShadowCard"]';
        cy.get(DropShadowCard)
          .should('be.visible')
          .should('have.css', 'background')
          .and('match', /none/);
      });

      it('should display search input first', () => {
        const SearchInput = '[data-testid="NotFound-SearchInput"]';
        cy.get(SearchInput)
          .should('have.css', 'order')
          .and('match', /1/);
      });

      it('should display submit button second', () => {
        const SubmitButton = '[data-testid="NotFound-SubmitButton"]';
        cy.get(SubmitButton)
          .should('be.visible')
          .should('have.css', 'order')
          .and('match', /2/);
      });

      it('should display departments dropdown last', () => {
        const DepartmentSelectWrapper = '[data-testid="NotFound-DepartmentSelectWrapper"]';
        cy.get(DepartmentSelectWrapper)
          .should('have.css', 'order')
          .and('match', /3/);
      });
    });

    describe('on desktop', () => {
      beforeEach(() => {
        cy.viewport('macbook-13');
      });

      it('should display a card background', () => {
        const DropShadowCard = '[data-testid="NotFound-DropShadowCard"]';
        cy.get(DropShadowCard)
          .should('be.visible')
          .should('not.have.css', 'background', 'none');
      });

      it('should display a fixed width input search', () => {
        const SearchInput = '[data-testid="NotFound-SearchInput"]';
        cy.get(SearchInput)
          .should('be.visible')
          .should('have.css', 'width')
          .and('match', /206px/);
      });

      it('should display departments dropdown fixed width', () => {
        const DepartmentSelectWrapper = '[data-testid="NotFound-DepartmentSelectWrapper"]';
        cy.get(DepartmentSelectWrapper)
          .should('be.visible')
          .should('have.css', 'width')
          .and('match', /150px/);
      });

      it('should display search input first', () => {
        const SearchInput = '[data-testid="NotFound-SearchInput"]';
        cy.get(SearchInput)
          .should('have.css', 'order')
          .and('match', /1/);
      });

      it('should display departments dropdown second', () => {
        const DepartmentSelectWrapper = '[data-testid="NotFound-DepartmentSelectWrapper"]';
        cy.get(DepartmentSelectWrapper)
          .should('have.css', 'order')
          .and('match', /2/);
      });

      it('should display submit button last', () => {
        const SubmitButton = '[data-testid="NotFound-SubmitButton"]';
        cy.get(SubmitButton)
          .should('be.visible')
          .should('have.css', 'order')
          .and('match', /3/);
      });
    });

    describe('Search Form interaction', () => {
      describe('when user has entered a search term, selected an option and pressed submit', () => {
        afterEach(() => {
          cy.visit('/pageNotFound', { failOnStatusCode: false });
        });

        it('should navigate to the correct url', () => {
          const DepartmentSelect = '[data-testid="NotFound-DepartmentSelect"]';
          const SearchInput = '[data-testid="NotFound-SearchInput"]';
          const Form = '[data-testid="NotFound-Form"]';

          describe('on mobile', () => {
            beforeEach(() => {
              cy.viewport('iphone-6');
            });

            cy.get(SearchInput).type('cats');
            cy.get(DepartmentSelect).select('pets');

            cy.get(Form).submit();
            cy.url().should('include', '/search?term=cats&filter%5Bcategory_id%5D=19064');
          });

          describe('on desktop', () => {
            beforeEach(() => {
              cy.viewport('macbook-13');
            });
            cy.get(SearchInput).type('cats');
            cy.get(DepartmentSelect).select('pets');

            cy.get(Form).submit();
            cy.url().should('include', '/search?term=cats&filter%5Bcategory_id%5D=19064');
          });
        });
      });
    });
  });

  describe('Category Blocks', () => {
    const CategoryBlock = '[data-testid="NotFound-CategoryBlock"]';

    describe('on mobile', () => {
      beforeEach(() => {
        cy.viewport('iphone-6');
      });

      it('should display category blocks', () => {
        cy.get(CategoryBlock).should('be.visible');
      });
    });

    describe('on desktop', () => {
      beforeEach(() => {
        cy.viewport('macbook-13');
      });

      it('should display category blocks', () => {
        cy.get(CategoryBlock).should('be.visible');
      });
    });
  });
});
