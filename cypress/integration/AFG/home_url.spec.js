const baseURL = "https://phptravels.com/demo";
describe('My First Test', function() {
    beforeEach(function() {
        cy.setCookie('optout', 'true', {domain: "prod_host.com"})
      });
    it('Visited Hubspot', function() {
    //  cy.clearCookies()    //clear all cookies
    
    cy.visit(baseURL);
     cy.contains('Login').click()
     cy.contains('Register').click({ force: true })
    // cy.contains('Register').click()
    // cy.get('#header > div > ul > li:nth-child(3) > a').click()
    
     
    })
  })