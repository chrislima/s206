/// <reference types="cypress"/>

describe('Caso de Teste: Testar login com site ultimateqa_automation', () => {

    const userName = 'testeteste5';
    const userPass = 'testeteste5';
    const userMail = 'testeteste5@testeteste.com';
    const signedInMessage = 'Signed in successfully.'

    it('Cenário: Entrar com usuário inválido e verificar se ocorreu o erro', () => {

        cy.visit('https://courses.ultimateqa.com/users/sign_in');
        cy.get('#user\\[email\\]').type('asdasdda');
        cy.get('#user\\[password\\]').type('asdasdasd');
        cy.get('.form__button-group > .button').click();

        cy.get('.message-text').should('have.text', 'Invalid email or password.');


    });

    it('Cenário: Cadastrar usuário válido e verificar se login com sucesso', () => {

        const hours = new Date().getHours().toString();
        const minutes = new Date().getMinutes().toString();
        const seconds = new Date().getMilliseconds().toString();
        const userId = hours + minutes + seconds + '_userName';
        

        cy.visit('https://courses.ultimateqa.com/users/sign_in');
        cy.get('.sign-in__sign-up > a').click();
        cy.get('#user\\[first_name\\]').type(userId);
        cy.get('#user\\[last_name\\]').type(userId);
        cy.get('#user\\[email\\]').type(userId+'@teste.com');
        cy.get('#user\\[password\\]').type(userId);
        cy.get('#user\\[terms\\]').click();
        cy.get('.form__button-group > .button').click();

        cy.get('.dropdown__toggle-button').should('contain.text', userId);

    });

    it('Cenário: Entrar com usuário válido e verificar se login com sucesso', () => {

        cy.visit('https://courses.ultimateqa.com/users/sign_in');
        cy.get('#user\\[email\\]').type(userMail);
        cy.get('#user\\[password\\]').type(userPass);
        cy.get('.form__button-group > .button').click();
        cy.get('.message-text').should('have.text', signedInMessage);
        cy.get('.dropdown__toggle-button').should('contain.text', userName);

    });


    

});

