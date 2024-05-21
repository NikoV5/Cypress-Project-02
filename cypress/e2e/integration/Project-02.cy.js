/// <reference types="cypress"/>
describe("Cypress-Project-02 - Login Form", () => {
  beforeEach(() => {
    // 1
    cy.visit("https://techglobal-training.com/frontend/project-2");


  });

  it('Test Case 1', () => {
    // 2
    cy.get('#username').should('be.visible');
    // 3
    cy.get('#username').should('not.have.attr', 'required');
    // 4
    cy.get('[for="username"]').should('have.text', 'Please enter your username')
    // 5
    cy.get('#password').should('be.visible');
    // 6
    cy.get('#password').should('not.have.attr', 'required');
    // 7
    cy.get('[for="password"]').should('have.text', 'Please enter your password');
    // 8, 9, 10
    cy.get('#login_btn').should('be.visible').and('be.enabled').and('have.text', 'LOGIN')
    // 11, 12, 13
    cy.get('#login_btn').next().should('be.visible').and('have.text', 'Forgot Password?')
  })

  it('Test Case 2', () => {
    // 2
    cy.get('#username').click().type('TechGlobal');
    // 3
    cy.get('#password').click().type('Test1234');
    // 4
    cy.get('#login_btn').click();
    // 5
    cy.get('#success_lgn').should('have.text', 'You are logged in');
    // 6
    cy.get('#logout').should('have.text', 'LOGOUT');


  })

  it('Test Case 3', () => {
      // 2
      cy.get('#username').click().type('TechGlobal');
      // 3
      cy.get('#password').click().type('Test1234');
      // 4
      cy.get('#login_btn').click();
      // 5
      cy.get('#logout').click();
      // 6
      cy.get('[class*="LoginForm_form"]').should('be.visible')

  })

  it('Test Case 4', () => {
    // 2
    cy.get('#login_btn').next().click();
    // 3
    cy.get('#modal_title').should('be.visible');
    // 4
    cy.get('.delete').should('be.visible');
    // 5
    cy.get('#email').should('be.visible');
    // 6
    cy.get('[for="email"]').should('have.text', 'Enter your email address and we\'ll send you a link to reset your password. ')
    // 7, 8, 9
    cy.get('#submit').should('be.visible').and('be.enabled').and('have.text', 'SUBMIT');
  })

  it('Test Case 5', () => {
    // 2
    cy.get('#login_btn').next().click()
    // 3
    cy.get('#modal_title').should('be.visible');
    // 4
    cy.get('.delete').click()
    // 5
    cy.get('.modal.is-active').should('not.exist');

  })

  it('Test Case 6', () => {
    // 2
    cy.get('#login_btn').next().click()
    // 3
    cy.get('#email').click().type('NikoV@gmail.com')
    // 4
    cy.get('#submit').click();
    // 5
    cy.get('#confirmation_message').should('have.text', 'A link to reset your password has been sent to your email address.')


  })

  it('Test Case 7', () => {
    // 2
    cy.get('#login_btn').click();
    // 3
    cy.get('#error_message').should('have.text', 'Invalid Username entered!');

  })

  it('Test Case 8', () => {
    // 2
    cy.get('#username').click().type('John');
    // 3
    cy.get('#password').click().type('Test1234');
    // 4
    cy.get('#login_btn').click();
    // 5
    cy.get('#error_message').should('have.text', 'Invalid Username entered!');

  })

  it('Test Case 9', () => {
    // 2
    cy.get('#username').click().type('TechGlobal');
    // 3
    cy.get('#password').click().type('1234');
    // 4
    cy.get('#login_btn').click();
    // 5
    cy.get('#error_message').should('have.text', 'Invalid Password entered!');

  })

  it.only('Test Case 10', () => {
    // 2
    cy.get('#username').click().type('John');
    // 3
    cy.get('#password').click().type('1234');
    // 4
    cy.get('#login_btn').click();
    // 5
    cy.get('#error_message').should('have.text', 'Invalid Username entered!');

  })
});