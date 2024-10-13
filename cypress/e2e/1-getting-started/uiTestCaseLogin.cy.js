/// <reference types="cypress" />
const username = "standard_user";
const password = "secret_sauce";

describe("Login to Saucedemo", () => {
  it("should log in with valid credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    console.log('User name is --> ',username)
    cy.get("#user-name").type(username);
    console.log('Password is --> ',password)
    cy.get("#password").type(password);
    cy.get("#login-button").click();
    cy.log('Clicked on Login Button')
    cy.get("#react-burger-menu-btn").click();
    cy.log('Clicked on hamburger button')
    cy.get("#logout_sidebar_links").click();
  });
});