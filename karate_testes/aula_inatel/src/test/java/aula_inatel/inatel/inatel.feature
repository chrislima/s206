Feature: Executar testes nas APIs do site do Inatel

Scenario: Testar retorno da API codificada para acessar https://inatel.br/home/

Given url 'https://inatel.br/home/'
When method get
Then status 200
And match $ contains 'jornada'