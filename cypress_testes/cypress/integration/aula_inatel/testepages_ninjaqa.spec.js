/// <reference types="cypress"/>

describe('Caso de Teste: Testar funcionalidades da página testpages hospedada com herokuapp', () => {

    const userName = 'QA NINJA Inatel';
    const userPass = 'qaninjainatel';
    const userMail = 'qaninjainatel@qaninjainatel.com';
    const signedInMessage = 'Signed in successfully.'

    it.skip('Cenário: Testar o form com valores de E-mail e Number válidos.', () => {

        cy.visit('https://testpages.herokuapp.com/styled/html5-form-test.html');
        cy.get('#email-field').clear();
        cy.get('#email-field').type(userMail);
        cy.get('#number-field').clear();
        cy.get('#number-field').type(77);
        cy.get('[type="submit"]').click();
        cy.get('#_valueemail').should('contain.text', userMail);
    });

    it.skip('Cenário: Testar alertas da pagina Fake Alert com texto parcial e completo', () => {

        cy.visit('https://testpages.herokuapp.com');
        cy.get('#fakealerttest').click();
        cy.get('#fakealert').click();
        //Texto parcial (contain.text)
        cy.get('#dialog-text').should('contain.text', 'I am a fake');
        cy.get('#dialog-ok').click();
        cy.get('#modaldialog').click();
        //Texto completo (have.text)
        cy.get('#dialog-text').should('have.text', 'I am a modal div!');

        const hours = new Date().getHours().toString();
        const minutes = new Date().getMinutes().toString();
        const seconds = new Date().getMilliseconds().toString();
        const userId = hours + minutes + seconds + '_userName';

    });

    it.skip('Cenário: Testar a calculadora presente em testpages, utilizando todas as 4 operações disponíveis.', () => {

        const operations = ['plus', 'times', 'minus', 'divide'];
        var value1 = Math.floor(Math.random() * 100);
        var value2 = Math.floor(Math.random() * 77)
        let answer = 'ERR';

        operations.forEach(operationSelector => {
            cy.visit('https://testpages.herokuapp.com/styled/calculator');
            cy.get('#number1').type(value1);
            cy.get('#function').select(operationSelector);
            cy.get('#number2').type(value2);

            switch (operationSelector) {
                case operations[0]:
                    answer = parseInt(value1+value2);
                    
                break;
                case operations[1]:
                    answer = parseInt(value1)*parseInt(value2);
                
                break;
                case operations[2]:
                    answer = parseInt(value1)-parseInt(value2);
                
                break;
                case operations[3]:
                    answer = Math.floor(parseInt(value1)/parseInt(value2));
                
                break;
            }
            cy.get('#calculate').click();
            cy.get(':nth-child(2) > p').should('contain.text', answer);

        });

    });

    it('Cenário: Verificar que a calculadora do cenário anterior retorna o código de erro ERR quando os campos de entrada estão vazios.', () => {

        let answer = 'ERR';
        cy.visit('https://testpages.herokuapp.com/styled/calculator');
        cy.get('#number1').clear();
        cy.get('#number2').clear();
        cy.get('#calculate').click();
        cy.get(':nth-child(2) > p').should('contain.text', answer);
        cy.get('#number1').type(10);
        cy.get('#number2').type(2);
        cy.get('#calculate').click();
        cy.get('#function').select('plus');
        cy.get('#number1').clear();
        cy.get('#number2').clear();
        cy.get('#calculate').click();
        cy.get(':nth-child(2) > p').should('contain.text', answer);
    });
});

