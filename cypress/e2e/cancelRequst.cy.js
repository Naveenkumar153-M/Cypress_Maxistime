describe('CRM', () => {
    it('Login into CRM ', () => {


      
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
    
  
      cy.visit({url:'https://testing.maxistime.com/apps/auth/login', failOnStatusCode: false});
      cy.wait(3000);

      cy.get("[type='email']").type("lead@mailsac.com");
      cy.get("[type='password']").type("Test@123");
      cy.get("[type='submit']").click();
      
      cy.get('a[href="/apps/user/calendar"]').click();
  
      cy.get('#mat-select-value-7').click();
      cy.wait(2000);
  
      // Selecting Month
      cy.get("[value='Month']").click();
  
      // Selecting Previous Month
      cy.get('.material-icons.pr-4').click();
      cy.get('.material-icons.pr-4').click();
  
      // cy.get('//span[text()="12"]/parent::div/following-sibling::div//i').click();

      cy.wait(1000);
      let totalCancelRequest = [];

      cy.get('.mat-button-wrapper').each(($li) => totalCancelRequest.push($li.text())).then(() => {
        cy.log(totalCancelRequest.join(', '))
        
        cy.log('Total cancel Request button  '+totalCancelRequest.length);

        for (let i = 0; i < totalCancelRequest.length-1; i++) {
          cancelRequest();  
          }
    
        })

  function cancelRequest(){
  
    cy.get('.mat-button-wrapper').contains(' Cancel request ').click();
    cy.should('be.visible','Log request cancelled successfully');
    cy.log('Request was cancelled successfully -->> ')
    
    }    

    })
  })