/// <reference types="cypress"/>

describe('Caso de Teste: Testar funcionalidades da pagina testpages hospedada com herokuapp', () => {

    const userName = 'QA NINJA Inatel';
    const userPass = 'qaninjainatel';
    const userMail = 'qaninjainatel@qaninjainatel.com';
    const signedInMessage = 'Signed in successfully.'

    it('Cenário: Testar o form com valores de E-mail e Number validos.', () => {

        cy.visit('https://testpages.herokuapp.com/styled/html5-form-test.html');
        cy.get('#email-field').clear();
        cy.get('#email-field').type(userMail);
        cy.get('#number-field').clear();
        cy.get('#number-field').type(77);
        cy.get('[type="submit"]').click();
        cy.get('#_valueemail').should('contain.text', userMail);
    });

    it('Cenário: Testar alertas da pagina Fake Alert com texto parcial e completo', () => {

        cy.visit('https://testpages.herokuapp.com');
        cy.get('#fakealerttest').click();
        cy.get('#fakealert').click();
        cy.get('#dialog-text').should('contain.text', 'I am a fake');
        cy.get('#dialog-ok').click();
        cy.get('#modaldialog').click();
        cy.get('#dialog-text').should('have.text', 'I am a modal div!');

        const hours = new Date().getHours().toString();
        const minutes = new Date().getMinutes().toString();
        const seconds = new Date().getMilliseconds().toString();
        const userId = hours + minutes + seconds + '_userName';

    });
});

