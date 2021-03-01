const baseURL = "https://www.zoho.com/crm/";
describe('Build everlasting customer relationships with the world’s favorite CRM', function() {
    beforeEach(function() {
        cy.setCookie('optout', 'true', {domain: "prod_host.com"})
      });
    it('Zoho CR', function() {
    //  cy.clearCookies()    //clear all cookies
    
    cy.visit(baseURL);
//     cy.get('.zgh-utilities > .zgh-accounts > .zgh-login').click()
//     cy.contains('Sign Up Now').click()
//     cy.wait(200)
//     cy.get('#firstname').type('Muhammad')
//     cy.get('#lastname').type('Usman')
//     cy.get('#emailfield').type('usmanshopdev@gmail.com')
//     cy.get('#password').type('T#$#test123')
//   //  cy.get('.za-country-container > dd > .select2 > .selection > .select2-selection').click()
//   //  cy.get('input[class="select2-search__field"]')
//  //   cy.contains('Oman').click()
//   //  cy.get('select').select('Oman')
//    // .type('Oman'),slect()
//   //  cy.get('#select2-country-result-q5lb-OM > .cn').click()
//     //  cy.contains('Login').click()
//     //  cy.contains('Register').click({ force: true })
//     // // cy.contains('Register').click()
//     // // cy.get('#header > div > ul > li:nth-child(3) > a').click()


//     cy.get('#signup-termservice').click()
//     cy.get('#nextbtn').click()
//     cy.wait(200)
//     cy.get('#showCompanyInfoBtn').click()

    
     
    })
  })