/// <reference types="Cypress"/>

import { loginPageForm } from "../Pages/loginPage";
const loginForm = new loginPageForm();
describe("Hotel Loin", () => {
    it("Verify that Hotel addictin Login Successfully", () =>{
        cy.visit("https://adactinhotelapp.com/index.php")

        cy.fixture('LoginData').then((data) => {
            loginForm.UserName(data.UserName);
            loginForm.Password(data.Password);
            loginForm.LoginButton();
          });
    })
})