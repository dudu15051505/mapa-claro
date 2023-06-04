# Mapa cobertura fixa e tecnologias operadora Claro no Brasil.

A um segundo repositório BETA, onde será feito o desenvolvimento do projeto sem o risco de afetar o mapa atual, sendo ele: https://github.com/dudu15051505/mapa-claro-beta

Este projeto tem como objetivo a criação de um mapa nacional de tecnologias utilizadas por cidade pela operadora CLARO BR, utilizando apenas para exibição HTML, CSS e JS.

Para este objetivo, fora utilizados duas API json de consulta de planos e promoções utilizadas pelo site principal da operadora, www.claro.com.br

Sendo elas:
  https://planos.claro.com.br/cobertura/api/promotions?city=NOME_DA_CIDADE
  https://api.amxrest.net/viability/CEP/NUMERO

As duas API possuem erros no retorno informado, por erro (praticamente incompetência da operadora) no cadastro das informações na sua própria base de dados.

A ex. temos a cidade Piraquara - Paraná, onde ela fora cadastrada como Piraquara - Pará, a cidade Dois Irmãos - Rio Grande do Sul cadastrada como Dois Irmaos - Rio Grande do Sul, fora a natural repetição de nomes de cidades Brasileiras como o nome Belém que se repete nos seguintes estados: PA, PB e AL, ao que leva a API simplesmente retornar o primeiro cadastro feito na base da operadora, por falta de opção de um campo de pesquisa utilizando não somente o nome da Cidade mas também o nome do Estado.
Tendo em mente estes problemas, fora implementado um script em python que realiza a consulta por nome oficiais de todas as cidades Brasileiras na api, realizado checagem se o estado retornado na consulta bate com o estado esperado, e armazenado estes dados para futuro processamento.

Um segundo script feito em powershell, que analisa cada arquivo armazenado pelo anterior mais dados de correção manual realizadas, para gerar os arquivos JS utilizado pelo site que realizam a pinagem das cidades com suas devidas tecnologias.

A segunda api de consulta direta cep + número, é implementada diretamente no HTML do mapa, é utilizado um serviço de terceiros ( https://viacep.com.br/ ) para consultar o nome das ruas, pois adivinhe, erro no cadastro nos nomes das ruas na base da operadora, caso este serviço não retorne dados é utilizado os dados da base da claro, com nome do logradouro mais os dados de número, cidade e estado, é feita um pedido de geolocalização na base de dados do OpenStreetMap, e com este retorno é pinado no mapa a localização aproximada exibindo os tipos de tecnologia e serviços habilitados retornados pela api para prestação de serviço neste endereço em especifico.

O projeto está programado para atualizar automaticamente as tecnologias por cidade semanalmente, no momento não a uma forma de comparar com dados antigos armazenados.

