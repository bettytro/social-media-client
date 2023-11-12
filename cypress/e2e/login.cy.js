describe('Login and Profile Access', () => {
    it('The user can log in and access their profile', () => {
      cy.visit('/');
      cy.get('.modal-footer button[data-auth="login"]').should('be.visible');
      cy.wait(1000);
      cy.get('.modal-footer button[data-auth="login"]').click();
      
      
      cy.get('#loginModal input[name="email"]').clear().type('elitro1@stud.noroff.no', { force: true });
      cy.wait(1000);
      cy.get('#loginModal input[name="password"]').should('be.visible');
      cy.get('#loginModal input[name="password"]').type('Testaccount');
  
      cy.get('#loginModal button[type="submit"]').click();
  
      cy.url().should('include', '/?view=profile&name=elitro1');
      cy.get('.profile-name').should('exist').and('have.text', 'elitro1');
    });
  });
  