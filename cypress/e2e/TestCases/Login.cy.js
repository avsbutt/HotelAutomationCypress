/// <reference types="Cypress"/>

import { LoginPageClass } from "../Pages/loginPage";
const loginForm = new LoginPageClass();

 describe("Hotel Login", () => {
   
    it("TC01: Verify that Hotel addictin Login Successfully", () =>{
        cy.visit('https://adactinhotelapp.com/index.php');

        cy.fixture('LoginData').then((data) => {
            loginForm.UserName(data.UserName);
            loginForm.Password(data.Password);
            loginForm.LoginButton();
            loginForm.Welcometxt();
            cy.log('User is Logged In Successfully with Username: ' + data.UserName);
          });
    })
 })

    it.skip("TC02: Verify that user cannot logged in with Invalid Credentials", ()=>{
        cy.visit("https://adactinhotelapp.com/index.php");
        cy.fixture('LoginData').then((data) => {
            loginForm.InvalidUserName(data.InvalidUserName);
            console.log(data.InvalidUserName)
            cy.log(data.InvalidErrorMsg)
            loginForm.InvalidPassword(data.InvalidPassword);
            loginForm.LoginButton();
            loginForm.InvalidErrorMsg();
        })
    })
    