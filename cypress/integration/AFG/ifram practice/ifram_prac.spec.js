const baseURL = "https://www.globalsqa.com/demo-site/frames-and-windows/";
describe('Build everlasting customer relationships with the world’s favorite CRM', function() {
    beforeEach(function() {
        cy.setCookie('optout', 'true', {domain: "prod_host.com"})
      });
    it('handel Ifram', function() {
    //  cy.clearCookies()    //clear all cookies
    
    cy.visit(baseURL);
  
    })
  })