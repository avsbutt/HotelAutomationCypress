import loginPageFun from "../Locators/login.json";

export function Login(){
    cy.visit('https://adactinhotelapp.com/index.php');
    cy.fixture('LoginData').then((data) => {
        cy.xpath(loginPageFun.LoginLocators.UserNameLoc).type(data.UserName)
        cy.xpath(loginPageFun.LoginLocators.PasswordLoc).type(data.Password)
        cy.xpath(loginPageFun.LoginLocators.LoginButtonLoc).click()
        cy.xpath(loginPageFun.LoginLocators.WelcomeTxtLoc).should('be.visible')
    });
}