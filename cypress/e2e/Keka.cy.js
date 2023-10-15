
describe('CRM', () => {
  it('Login into CRM ', () => {

    cy.visit({url: 'https://maxistime.com/apps/auth/login', failOnStatusCode: false});
    cy.wait(1500);
    cy.get("[type='email']").type("naveenkumar.m@calibraint.com");
    cy.get("[type='password']").type("15398@Naveen");
    cy.get("[type='submit']").click();

    cy.wait(2000);
    
    cy.get('a[href="/apps/user/calendar"]').click();

    cy.get('#mat-select-value-7').click();
    cy.wait(2000);

    // Selecting Month
    cy.get("[value='Month']").click();

    // Selecting Previous Month
    // cy.get('.material-icons.pr-4').click();
    // cy.get('.material-icons.pr-4').click();

    // cy.get('//span[text()="12"]/parent::div/following-sibling::div//i').click();

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
  cy.log('Request was sent successfully -->> ');

 
}  

const totalAddLog=[];

  cy.get('[mattooltip="Request to add task"]').each(($li) => totalAddLog.push($li.text())).then(() => {
  cy.log('Total AddLog >>> '+totalAddLog.length);

  for (let addLog = 0; addLog < totalAddLog.length; addLog++) {
    cy.log('Enter the loop');
  requestLog();  
  }

})

    cy.log('Total AddLog out ' + totalAddLog.length);

// for (let requestTime = 0; requestTime < 31; requestTime++) {
// requestLog();  
// }

  })
})