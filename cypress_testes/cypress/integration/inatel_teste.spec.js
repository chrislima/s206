/// <reference types="cypress"/>

describe('Meu primeiro Teste', () => {

    it('Login no site do Inatel', () => { 

        cy.visit('https://inatel.br/home/');
        cy.get('h1.colorfff').should('contain.text', 'Tecnologia é uma jornada.');
    });

    it('Navegar ate Menu Aluno - Menu Cursos - Verificar que a pagina contem VESTIBULAR no primeiro icone e nao contem VESTIBULAR no quarto icone.', () => { 

        cy.visit('https://inatel.br/home/');
        cy.get('#dropbtn > .fa').click();
        cy.get('.ma-menu > :nth-child(1) > :nth-child(6) > a').click();
        cy.get('.IconBox1-Estudantes').should('contain.text', 'VESTIBULAR');
        cy.get('.IconBox4-Estudantes').should('not.contain.text', 'VESTIBULAR');

    });

    it('Login no site do Inatel - Engenharia de Software', () => { 

        cy.visit('https://inatel.br/vestibular/engenharia-de-software');
        cy.get('.SJ-MT-15 > .color000 > .fa').click();
        cy.get('#noturno6 > .SJ-FZ-20').click();
        cy.get('#noturno6 > .SJ-FZ-20').should('contain.text', 6);
        cy.get('#noturno6 > :nth-child(9) > .accordionItemHeading').click();
        cy.get('.open > .accordionItemContent > :nth-child(4) > .ng-binding').should('contain.text', 'Tipos de testes');
    });

})