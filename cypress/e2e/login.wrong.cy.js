describe('Login Form Validation', () => {
    it('The user cannot submit the login form with invalid credentials and is shown a message.', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.get('.modal-footer button[data-auth="login"]').should('be.visible').click();
      
      cy.wait(1000);
      
      cy.get('#loginModal').should('be.visible');
      
      cy.get('#loginModal input[name="email"]').clear().type('invalid.elitro@noroff.no', { force: true });
      cy.get('#loginModal input[name="password"]').should('be.visible');
      cy.get('#loginModal input[name="password"]').type('invalidPassword');
      
      cy.get('#loginModal button[type="submit"]').click();
    //   alert to include something it doesn't include so the test can fail
      cy.on('window:alert', (message) => {
        expect(message).to.include('You have now logged in!');
      });
   });
  });
  