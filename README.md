[![cypressci](https://github.com/chrislima/s206/workflows/CypressCI/badge.svg)](https://github.com/chrislima/s206/actions/)
[![karateci](https://github.com/chrislima/s206/workflows/KarateCI/badge.svg)](https://github.com/chrislima/s206/actions/)



# S206 - Qualidade de Software
- Repositório da disciplina Qualidade de Software - S206. 
- Instituto Nacional de Telecomunicações - Inatel. 
- Curso: Engenharia de Software.
- Prof. Christopher Lima

Para acompanhar a parte prática desta disciplina, será necessário utilizar algumas ferramentas para quem utiliza o SO Windows:

## Instalação do ambiente de desenvolvimento:

1. Git Bash (Git for Windows - mais leve)
https://gitforwindows.org/

2. Nodejs (node):
https://nodejs.org/en/

3. IDE VSCode (code):
https://code.visualstudio.com/
OBS: Pode usar qualquer IDE. Eclipse, InteliJ...fica a seu critério.

4. JDK (java):
https://www.oracle.com/java/technologies/javase-downloads.html


## Instalação - Cypress (Teste de UI):
1. Faça a instalação do cypress via linha de comando. Abra o terminal e digite

```
npm install cypress
```

2. Caso não queira utilizar o cypress pelo NPM, pode fazer o download direto do site: https://www.cypress.io/

Link para download direto: https://download.cypress.io/desktop

Basta baixar, extrair, executar o Cypress.exe e apontar para o diretório do projeto desejado na interface do cypress.
Utilize a IDE para editar o código.

## Instalação - Karate (Teste de API):

1. Utilizaremos o maven (mvn) para fazer a instalação do Karate via pom.xml. Então crie um projeto Maven e cole a seguinte dependencia no pom.xml:

```
<dependency>
    <groupId>com.intuit.karate</groupId>
    <artifactId>karate-junit5</artifactId>
    <version>1.1.0</version>
    <scope>test</scope>
</dependency>
```

2. Abre o terminal e digite o comando, no diretório do pom.xml criado anteriormente.

```
mvn clean install
```


Após a instalação de todos os itens, teste seu ambiente:
Abra a linha de comando (gitbash ou cmder) e digite:

### Testando as instalações

```
which git
which node
which code (Se tiver usando o VSCode)
which mvn
```
A resposta de cada comando deve ser o local de instalação de cada ferramenta.

```
java --version
mvn --version
```
A resposta de cada comando deve ser a versão instalada.


### Comandos úteis cypress (utilize a aula para enteder o que cada comando faz):

```
Criar o diretório inicial e indicar para o node que o diretório é um projeto
npm init

Baixar as dependencias do projeto (caso já tenha baixado o código do git)
npm install

Abrir cypress pela linha de comando:
./node_modules/.bin/cypress open

Rodar specs por linha de comando:
./node_modules/.bin/cypress run --spec 'cypress/integration/aula_inatel/**/'

Para gerar um report HTML, siga os 3 comandos abaixo:

1. Adicionando as dependências necessárias para gerar o reporte de testes:
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator 
	
2. Fazendo merge dos arquivos .json gerados (Após a execução dos testes):
npx mochawesome-merge "cypress/reports/*.json" > mochawesome.json 

3. Gerando o HTML bonito com os reports:
npx marge mochawesome.json 

```


### Comandos úteis Karate (utilize a aula para enteder o que cada comando faz):

```
Criar estrutura inicial Karate:

mvn archetype:generate \
-DarchetypeGroupId=com.intuit.karate \
-DarchetypeArtifactId=karate-archetype \
-DarchetypeVersion=1.0.1 \
-DgroupId=aula.inatel \
-DartifactId=aula_inatel

Executar um teste a partir do Runner ou suíte:
mvn test –Dtest=StarWarsRunner

Executar testes separados por tags:
mvn test -Dkarate.options="--tags @tag”

Para ignorar alguma tag:
mvn test -Dkarate.options="--tags ~@tag" 

Todas as tags podem ser configuradas na classe da suíte de testes. (InatelTest.Java)

```

## Caso queira uma solução mais robusta para ter Ubuntu rodando dentro do Windows (WSL + JDK GWSL):

https://www.youtube.com/watch?v=qb2ClX7BQ78

## Instalação da IDE IntelliJ (É preciso fazer a instalação anterior)

https://www.youtube.com/watch?v=cvKO2YciYe8

