const loginPageCRED=require("../Locators/login.json")

export class LoginPage{
    UserName(UserName){
        cy.xpath(loginPageCRED.LoginLocators.UserNameLoc).type(UserName)
        cy.wait(300)
    }
    Password(Password){
        cy.xpath(loginPageCRED.LoginLocators.PasswordLoc).type(Password)
        cy.wait(300)
    }

    LoginButton(){
        cy.xpath(loginPageCRED.LoginLocators.LoginButtonLoc).click()
        cy.wait(300)
    }
    InvalidUserName(InvalidUserName){
        cy.xpath(loginPageCRED.LoginLocators.UserNameLoc).type(InvalidUserName)
        cy.wait(300)
    }
    InvalidPassword(InvalidPassword){
        cy.xpath(loginPageCRED.LoginLocators.PasswordLoc).type(InvalidPassword)
        cy.wait(300)
    }
    InvalidErrorMsg(){
        cy.get(loginPageCRED.LoginLocators.InvalidErrorMsg).should('be.visible').and('contain', 'Invalid Login details or Your Password might have expired.');
    }
}