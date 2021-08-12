/// <reference types="cypress"/>

describe('Cenário de Teste: Testar funcionalidades da página testpages hospedada com herokuapp', () => {

    const userName = 'QA NINJA Inatel';
    const userPass = 'qaninjainatel';
    const userMail = 'qaninjainatel@qaninjainatel.com';
    const signedInMessage = 'Signed in successfully.'

    it('Caso: Testar o form com valores de E-mail e Number válidos. Logo em seguida, testar o tamanho da div na página de forms HTML5.', () => {

        cy.visit('https://testpages.herokuapp.com/styled/html5-form-test.html');
        cy.get('#email-field').clear();
        //Digita o texto da variavel userMail
        cy.get('#email-field').type(userMail);
        cy.get('#number-field').clear();
        cy.get('#number-field').type(77);
        cy.get('[type="submit"]').click();
        //Multiplas assertivas
        cy.get('#_valueemail').should('contain.text', userMail).and('not.contain', 'aaa@inatel.br');

        //Vai para outra página e faz o assertion por tamanho na div
        cy.visit('https://testpages.herokuapp.com/styled/html5-form-test.html');

        cy.get('.explanation').should(($div) => {
            expect($div).to.have.length(1);
        })

    });

    it('Caso: Testar alertas da pagina Fake Alert com texto parcial e completo', () => {

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

    it('Caso: Testar a calculadora presente em testpages, utilizando todas as 4 operações disponíveis.', () => {

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

    it('Caso: Verificar que a calculadora do Caso anterior retorna o código de erro ERR quando os campos de entrada estão vazios.', () => {

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

