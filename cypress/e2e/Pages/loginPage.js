const loginPageFun=require("../Locators/login.json")

export class LoginPageClass{
    UserName(UserName){
        cy.xpath(loginPageFun.LoginLocators.UserNameLoc).type(UserName)
        cy.wait(300)
    }
    Password(Password){
        cy.xpath(loginPageFun.LoginLocators.PasswordLoc).type(Password)
        cy.wait(300)
    }

    LoginButton(){
        cy.xpath(loginPageFun.LoginLocators.LoginButtonLoc).click()
        cy.wait(300)
    }
    Welcometxt(){
        cy.xpath(loginPageFun.LoginLocators.WelcomeTxtLoc).should('be.visible')
    }
    InvalidUserName(InvalidUserName){
        cy.xpath(loginPageFun.LoginLocators.UserNameLoc).type(InvalidUserName)
        cy.wait(300)
    }
    InvalidPassword(InvalidPassword){
        cy.xpath(loginPageFun.LoginLocators.PasswordLoc).type(InvalidPassword)
        cy.wait(300)
    }
    InvalidErrorMsg(){
        cy.get(loginPageFun.LoginLocators.InvalidErrorMsgLoc).should('be.visible').and('contain', 'Invalid Login details or Your Password might have expired.');
    }
}