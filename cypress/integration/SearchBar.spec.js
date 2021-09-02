describe('Search functions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
  
    it('should return results from "show all" search button', ()=> {
        cy.get('[data-cy="show-all-button"]').click();
        cy.wait(10000)
        cy.root().should('contain', 'Location');
    })

    it('should return results from "search by road" search button', ()=> {
        cy.get('#roadsearch').type('A2, A406');
        cy.get('[data-cy="search-road-button"]').click();
        cy.wait(5000)
        cy.root().should('contain', 'Location');
    })
  });