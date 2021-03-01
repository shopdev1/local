const baseURL = "https://www.zoho.com/crm/";
describe('Build everlasting customer relationships with the world’s favorite CRM', function() {
    beforeEach(function() {
        cy.setCookie('optout', 'true', {domain: "prod_host.com"})
      });
    it('Zoho CR', function() {
    //  cy.clearCookies()    //clear all cookies
    
    cy.visit(baseURL);
    cy.get('.zgh-utilities > .zgh-accounts > .zgh-login').click()
    cy.get('#login_id').type('usmanshopdev@gmail.com')
    cy.get('#login > #nextbtn').click()
    cy.get('#password').type('T#$#test123')
    cy.get('#password_container > .textbox_div > .icon-hide').click()
    cy.get('#password_container > .textbox_div > .icon-hide').click()
    cy.get('#login > #nextbtn').click()
    



    
     
    })
  })