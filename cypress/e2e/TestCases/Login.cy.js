/// <reference types="Cypress"/>

import { LoginPage } from "../Pages/loginPage";
const loginForm = new LoginPage();
describe("Hotel Login", () => {
    it.skip("TC01; Verify that Hotel addictin Login Successfully", () =>{
        cy.visit('/');

        cy.fixture('LoginData').then((data) => {
            loginForm.UserName(data.UserName);
            loginForm.Password(data.Password);
            loginForm.LoginButton();
          });
    })
    it.only("TC02: Verify that user cannot logged in with Invalid Credentials", ()=>{
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
})