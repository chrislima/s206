/// <reference types="cypress"/>

describe('Cenário de Teste: Testar funcionalidades de Login do site globalsqa (angularjs)', () => {

    it('Caso de Teste: Registrar um usuario com sucesso!', () => { 
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
        cy.get('.btn-link').click();
        cy.get('#firstName').type('ninjaqaInatel');
        cy.get('#Text1').type('ninjaqaInatel');
        cy.get('#username').type('ninjaqaInatel');
        cy.get('#password').type('ninjaqaInatel');
        cy.get('.btn-primary').click();
        cy.get('.ng-binding').should('contain.text', 'Registration successful');
        
    });

    it('Caso de Teste: Falha ao tentar registrar um usuario com dados errados!', () => {
        //Aumentando a cobertura de testes. Accesamos a mesma página por 2 caminhos diferentes (Olhar exemplo anterior).
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register');
        cy.get('#firstName').type('ninjaqaInatel');
        cy.get('#Text1').type('ninjaqaInatel');
        cy.get('#username').type('ninjaqaInatel');
        cy.get('#password').type('ninjaqaInatel');
        cy.get('#firstName').clear();
        cy.get('.has-error > .help-block').should('have.text', 'First name is required');
        cy.get('.btn-primary').should('be.disabled');

    });

    it('Caso de Teste: Login na plataforma com sucesso!', () => { 
        //Boa pratica: Nunca usar dados de testes anteriores.
        var userInfo = createUserNinjaQa();
        cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
        cy.get('#username').type(userInfo[0]);
        cy.get('#password').type(userInfo[1]);
        cy.get('.btn-primary').click();
        cy.get('h1.ng-binding').should('contain.text', userInfo[0]);

    });

    it('Caso de Teste: Remover um usuario cadastrado e verificar!', () => { 
        var userInfo = createUserNinjaQa();
        cy.loginNinjaQa(userInfo[0], userInfo[1]);
        cy.get('.ng-binding > a').click();
        cy.loginNinjaQa(userInfo[0], userInfo[1]);
        cy.get('.ng-binding').should('have.text', 'Username or password is incorrect');
        
    });

});

//Functions

function createUserNinjaQa() {

    let hours = new Date().getHours().toString();
    let minutes = new Date().getMinutes().toString();
    let sec = new Date().getSeconds().toString();
    let userId = hours + minutes + sec + '_userId';
    let userPass = hours + minutes + sec + '_userPass';
    let userInfo = [userId, userPass];


    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
    cy.get('.btn-link').click();
    cy.get('#firstName').type(userId);
    cy.get('#Text1').type(userId);
    cy.get('#username').type(userId);
    cy.get('#password').type(userPass);
    cy.get('.btn-primary').click();

    return userInfo;
}