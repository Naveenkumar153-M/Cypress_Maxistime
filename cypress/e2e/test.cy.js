describe('CRM', () => {
    it('Login into CRM ', () => {

  function requestLog(){
    cy.get('[mattooltip="Request to add task"]').eq(0).click();
    cy.wait(1000);
  
    cy.get('.mat-dialog-title.dialog-titile').should('be.visible','Reason');
    // cy.wait('#mat-dialog-title-0');
    cy.get('#description').type('Apologize for not the adding the log');
    cy.wait(1000);
    cy.contains('Send Request').click();
    
    cy.should('be.visible','Log request sent successfully');
    cy.should('be.visible',' Cancel request ').eq(0);
    cy.wait(2000);
   
  }  
  
  
  
  const totalAddLog=[];
  cy.get('[mattooltip="Request to add task"]').each(($li)=>totalAddLog.push($li.text())).then(()=>{
    cy.log('Total AddLog >>> '+totalAddLog.length);
  })
  cy.log('Total AddLog out '+totalAddLog.length);
  
  // for (let requestTime = 0; requestTime < 31; requestTime++) {
  // requestLog();  
  // }
  
  
  
    })
  })


  const emailList=[];

  