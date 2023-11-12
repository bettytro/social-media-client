describe('Logout Functionality', () => {
    it('should allow the user to log out with the logout button', () => {

      cy.visit('/');
      cy.wait(1000);
      cy.get('.modal-footer button[data-auth="login"]').should('be.visible').click();
      cy.get('#loginModal').should('be.visible');
      cy.get('#loginModal input[name="email"]').clear().type('elitro1@stud.noroff.no', { force: true });
      cy.get('#loginModal input[name="password"]').type('Testaccount');
      cy.get('#loginModal button[type="submit"]').click();
      cy.url().should('include', '/?view=profile');
        cy.wait(3000);
      cy.get('.text-end button[data-auth="logout"]').should('be.visible').click();
      cy.url().should('include', '/');
      cy.wait(1000);
      cy.get('.modal-footer button[data-auth="login"]').should('be.visible');
    });
  });