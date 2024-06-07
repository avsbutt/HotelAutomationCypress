const loginPageCRED=require("../Locators/login.json")

export class loginPageForm{
    UserName(UserName){
        cy.xpath(loginPageCRED.Login.UserName).type(UserName)
        cy.wait(300)
    }
    Password(Password){
        cy.xpath(loginPageCRED.Login.Password).type(Password)
        cy.wait(300)
    }

    LoginButton(){
        cy.xpath(loginPageCRED.Login.LoginButton).click()
        cy.wait(300)
    }
}