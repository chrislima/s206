[![cypressci](https://github.com/chrislima/s206/workflows/CypressCI/badge.svg)](https://github.com/chrislima/s206/actions/)


# S206 - Qualidade de Software
- Repositório da disciplina Qualidade de Software - S206. 
- Instituto Nacional de Telecomunicações - Inatel. 
- Curso: Engenharia de Software.
- Prof. Christopher Lima

Para acompanhar a parte prática desta disciplina, será necessário utilizar algumas ferramentas para quem utiliza o SO Windows:

## Instalação - Cypress:

1. cmder (linda de comando que já instala algumas dependências):
https://cmder.net/

2. Nodejs (node):
https://nodejs.org/en/

3. Git (git):
https://git-scm.com/downloads

4. IDE VSCode (code):
https://code.visualstudio.com/
OBS: Pode usar qualquer IDE.

5. Caso não queira utilizar o cypress pelo NPM, pode fazer o download direto do site: https://www.cypress.io/

Link para download direto: https://download.cypress.io/desktop

Basta baixar, extrair, executar o Cypress.exe e apontar para o diretório do projeto desejado na interface do cypress.
Utilize a IDE para editar o código caso seja necessário.

## Instalação - Karate:

1. cmder (linda de comando que já instala algumas dependências):
https://cmder.net/

2. Git (git):
https://git-scm.com/downloads

3. IDE VSCode (code):
https://code.visualstudio.com/
OBS: Pode usar qualquer IDE.

4. Maven (mvn):
https://maven.apache.org

5. JDK (java):
https://www.oracle.com/java/technologies/javase-downloads.html


Após a instalação de todos os itens, teste seu ambiente:
Abra a linha de comando (cmder) e digite:

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
Abrir cypress pela linha de comando:
./node_modules/.bin/cypress open

Rodar specs por linha de comando:
./node_modules/.bin/cypress run --spec 'cypress/integration/aula_inatel/**/'

Adicionando as dependências necessárias:
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator 
	
Fazendo merge dos arquivos .json gerados (Após a execução dos testes):
npx mochawesome-merge "cypress/reports/*.json" > mochawesome.json 

Gerando o HTML bonito com os reports:
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
