Sistema Just in Time - Gestão de Produção MDF
1. Descrição do Projeto

O projeto Sistema Just in Time - Gestão de Produção MDF foi desenvolvido com o objetivo de auxiliar no controle da produção e do estoque de produtos fabricados em MDF.

O sistema permite realizar o cadastro de produtos, controlar a quantidade disponível em estoque, definir um estoque mínimo e registrar movimentações de entrada e saída.

A aplicação utiliza o conceito de Just in Time (JIT), buscando auxiliar no controle da produção de acordo com a necessidade de estoque e evitando problemas relacionados à falta ou ao excesso de produtos.

2. Objetivo

O principal objetivo do sistema é fornecer uma aplicação web simples para gerenciamento de produtos, estoque e produção.

Entre as principais funcionalidades estão:

Cadastro de produtos;
Consulta de produtos cadastrados;
Edição de produtos;
Exclusão de produtos;
Controle da quantidade em estoque;
Definição de estoque mínimo;
Registro de produtos fabricados;
Registro de pedidos;
Controle de entradas e saídas do estoque;
Alerta quando o estoque fica abaixo do mínimo;
Sistema de login;
Identificação do usuário responsável pela movimentação;
Ordenação alfabética dos produtos utilizando o algoritmo QuickSort.
3. Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

Backend
Node.js - Ambiente de execução JavaScript;
Express.js - Framework utilizado para criação do servidor e das rotas da API;
MySQL - Banco de dados utilizado para armazenar as informações;
mysql2 - Biblioteca utilizada para realizar a conexão entre o Node.js e o MySQL.
Frontend
HTML5 - Estrutura das páginas;
CSS3 - Estilização da aplicação;
JavaScript - Interação com o usuário e comunicação com a API.
Banco de Dados
MySQL
Banco utilizado: preparacao_db
Ferramentas recomendadas
Visual Studio Code;
XAMPP;
Navegador web;
MySQL/phpMyAdmin.
4. Estrutura do Projeto

A estrutura principal do projeto está organizada da seguinte maneira:

just_in_time_01_2026/
│
├── config/
│   └── database.js
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── producao.html
│   ├── produtos.html
│   └── style.css
│
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── producaoController.js
│   │   └── produtoController.js
│   │
│   └── routes.js
│
├── database.sql
├── documentacao.md
├── package.json
├── package-lock.json
└── server.js
5. Funcionamento do Sistema

O funcionamento do sistema pode ser dividido em três partes principais:

Autenticação do usuário;
Gerenciamento de produtos;
Gerenciamento da produção e estoque.
6. Sistema de Login

A tela de login permite que o usuário informe:

E-mail;
Senha.

Após o envio dos dados, o frontend realiza uma requisição para:

POST /api/login

O backend consulta a tabela usuarios e verifica se existe um usuário com o e-mail e senha informados.

Quando os dados estão corretos, o sistema retorna os dados básicos do usuário e os armazena no localStorage do navegador.

Caso os dados estejam incorretos, uma mensagem de erro é apresentada ao usuário.

Usuários cadastrados inicialmente
Nome	E-mail	Senha
Carlos Silva	carlos@mdf.com	123456
Ana Souza	ana@mdf.com	123456
Marcos Lima	marcos@mdf.com	123456

As credenciais acima são apenas dados iniciais utilizados para teste do sistema.

7. Cadastro de Produtos

O sistema possui uma tela específica para gerenciamento dos produtos.

Cada produto possui os seguintes dados:

Campo	Descrição
ID	Identificador único do produto
Nome	Nome do produto
Descrição	Descrição do produto
Custo	Custo do produto
Quantidade em estoque	Quantidade disponível
Estoque mínimo	Quantidade mínima desejada

O usuário pode:

Cadastrar um novo produto;
Consultar produtos;
Pesquisar produtos;
Editar produtos;
Excluir produtos.
8. Pesquisa de Produtos

Na tela de produtos existe um campo de pesquisa.

A pesquisa verifica o termo digitado pelo usuário no:

Nome do produto;
Descrição do produto.

O resultado da pesquisa é atualizado diretamente na tabela da página.

9. Gestão de Produção

A tela de produção permite registrar movimentações relacionadas ao estoque.

Existem dois tipos de movimentação:

FABRICADO

Representa uma entrada de produtos no estoque.

Quando um produto é fabricado:

Novo estoque = Estoque atual + Quantidade fabricada
PEDIDO

Representa uma saída de produtos do estoque.

Quando um pedido é realizado:

Novo estoque = Estoque atual - Quantidade solicitada

O sistema verifica se existe quantidade suficiente antes de realizar uma saída.

Caso a quantidade solicitada seja maior que o estoque disponível, a operação não é realizada e uma mensagem de erro é apresentada.

10. Controle de Estoque Mínimo

Cada produto possui um valor de estoque mínimo.

Após uma movimentação do tipo PEDIDO, o sistema verifica se a quantidade disponível ficou abaixo do limite configurado.

Exemplo:

Estoque atual: 12
Pedido: 5
Novo estoque: 7
Estoque mínimo: 10

Nesse caso, o estoque final ficou abaixo do mínimo configurado.

O sistema então apresenta um alerta informando que o estoque precisa de atenção.

11. Ordenação dos Produtos

Para atender ao requisito de ordenação, o sistema utiliza o algoritmo QuickSort para organizar os produtos alfabeticamente pelo nome.

A ordenação é realizada no backend antes dos produtos serem enviados para a página de produção.

O algoritmo utiliza um elemento chamado pivot para separar os produtos em dois grupos:

Produtos com nome anterior ao pivot;
Produtos com nome posterior ao pivot.

Depois, os grupos são ordenados recursivamente.

12. Banco de Dados

O banco de dados utilizado pelo sistema é o:

preparacao_db

O banco possui três tabelas principais:

usuarios
produtos
movimentacoes_estoque
13. Tabela Usuarios

A tabela usuarios armazena os usuários que podem acessar o sistema.

Estrutura:

Campo	Tipo	Descrição
id	INT	Identificador do usuário
nome	VARCHAR(100)	Nome do usuário
email	VARCHAR(100)	E-mail do usuário
senha	VARCHAR(255)	Senha do usuário

O campo id é a chave primária.

O campo email possui restrição de unicidade, evitando o cadastro de dois usuários com o mesmo e-mail.

14. Tabela Produtos

A tabela produtos armazena os produtos controlados pelo sistema.

Campo	Tipo	Descrição
id	INT	Identificador do produto
nome	VARCHAR(100)	Nome do produto
descricao	TEXT	Descrição do produto
custo	DECIMAL(10,2)	Custo do produto
qtd_estoque	INT	Quantidade disponível
qtd_minima	INT	Estoque mínimo

O campo id é utilizado como chave primária.

15. Tabela Movimentacoes_estoque

A tabela movimentacoes_estoque registra todas as movimentações realizadas no estoque.

Campo	Tipo	Descrição
id	INT	Identificador da movimentação
produto_id	INT	Produto movimentado
usuario_id	INT	Usuário responsável
tipo	ENUM	Tipo da movimentação
quantidade	INT	Quantidade movimentada
data_movimentacao	DATETIME	Data e hora da movimentação

O campo produto_id possui relacionamento com a tabela produtos.

O campo usuario_id possui relacionamento com a tabela usuarios.

Os tipos de movimentação disponíveis são:

FABRICADO
PEDIDO
16. Relacionamento entre as Tabelas

O banco de dados possui os seguintes relacionamentos:

USUARIOS
   │
   │ 1:N
   │
   ▼
MOVIMENTACOES_ESTOQUE
   ▲
   │ N:1
   │
PRODUTOS

Um usuário pode realizar várias movimentações.

Um produto pode possuir várias movimentações de estoque.

Cada movimentação está relacionada a um único usuário e a um único produto.

17. API do Sistema

A aplicação possui uma API REST para comunicação entre frontend e backend.

Autenticação
Login
POST /api/login

Exemplo de dados enviados:

{
    "email": "carlos@mdf.com",
    "senha": "123456"
}
Produtos
Listar produtos
GET /api/produtos

Retorna todos os produtos cadastrados.

Criar produto
POST /api/produtos

Exemplo:

{
    "nome": "Caixa MDF",
    "descricao": "Caixa organizadora em MDF",
    "custo": 25.50,
    "qtd_estoque": 10,
    "qtd_minima": 5
}
Atualizar produto
PUT /api/produtos/:id
Excluir produto
DELETE /api/produtos/:id
Produção
Listar produtos ordenados
GET /api/producao/produtos

Essa rota retorna os produtos ordenados alfabeticamente utilizando o algoritmo QuickSort.

Registrar movimentação
POST /api/producao/movimentacao

Exemplo:

{
    "produto_id": 1,
    "usuario_id": 1,
    "tipo": "FABRICADO",
    "quantidade": 10,
    "data_movimentacao": "2026-09-02T10:00"
}
18. Validações

O sistema possui algumas validações para evitar dados incorretos.

Produtos

Os seguintes campos são obrigatórios:

Nome;
Custo;
Quantidade em estoque;
Quantidade mínima.

Valores negativos não são permitidos para:

Custo;
Estoque;
Estoque mínimo.
Movimentações

Para registrar uma movimentação é necessário informar:

Produto;
Usuário;
Tipo;
Quantidade;
Data.

A quantidade deve ser maior que zero.

Além disso, não é permitido realizar um pedido quando não existe quantidade suficiente em estoque.

19. Configuração do Banco de Dados

A conexão com o MySQL está configurada no arquivo:

config/database.js

Atualmente, a configuração utiliza:

Host: 127.0.0.1
Usuário: root
Senha: vazia
Banco: preparacao_db

Essa configuração foi preparada para utilização com o XAMPP, considerando o MySQL local com usuário root e senha vazia.

Caso o MySQL esteja configurado de outra maneira, os dados do arquivo database.js deverão ser alterados.

20. Instalação
20.1 Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

Node.js;
XAMPP;
MySQL;
Visual Studio Code ou outro editor de código;
Navegador web.
20.2 Instalar as dependências

Abra o terminal dentro da pasta do projeto e execute:

npm install

As principais dependências utilizadas são:

express
mysql2
21. Configuração do Banco
Abra o XAMPP;
Inicie o Apache e o MySQL;
Abra o phpMyAdmin;
Acesse a opção para executar SQL;
Abra o arquivo:
database.sql
Execute o script.

O script cria automaticamente o banco:

preparacao_db

Também são criadas as tabelas e alguns registros iniciais para testes.

22. Executando o Sistema

Depois de configurar o banco de dados, abra o terminal na pasta do projeto e execute:

npm start

Se tudo estiver correto, será apresentada uma mensagem semelhante a:

Servidor rodando com sucesso em http://localhost:3000

Depois, abra o navegador e acesse:

http://localhost:3000

O sistema irá redirecionar automaticamente para a tela de login.

23. Fluxo de Utilização

O fluxo básico para utilizar o sistema é:

Login
  ↓
Menu Principal
  ↓
Cadastro de Produtos
  ↓
Cadastrar/Editar/Excluir Produtos
  ↓
Gestão de Produção
  ↓
Selecionar Produto
  ↓
Escolher FABRICADO ou PEDIDO
  ↓
Informar Quantidade
  ↓
Registrar Movimentação
  ↓
Atualizar Estoque
  ↓
Verificar Estoque Mínimo
24. Arquivos Principais
server.js

Responsável por iniciar o servidor Express, disponibilizar os arquivos do frontend e registrar as rotas da API.

src/routes.js

Responsável por definir as rotas utilizadas pelo sistema.

src/controllers/authController.js

Responsável pelo processo de autenticação dos usuários.

src/controllers/produtoController.js

Responsável pelas operações de cadastro, consulta, atualização e exclusão de produtos.

src/controllers/producaoController.js

Responsável pelo controle das movimentações de estoque e pelo algoritmo QuickSort.

config/database.js

Responsável pela configuração da conexão com o banco de dados MySQL.

database.sql

Contém a criação do banco, tabelas e registros iniciais.

public/login.html

Página de acesso ao sistema.

public/index.html

Página principal do sistema após o login.

public/produtos.html

Página de cadastro, consulta, edição e exclusão de produtos.

public/producao.html

Página utilizada para registrar entradas e saídas do estoque.

public/style.css

Arquivo responsável pela estilização das páginas do sistema.

25. Considerações Finais

O sistema desenvolvido atende à proposta de criar uma aplicação web para auxiliar no gerenciamento da produção e do estoque de produtos em MDF.

A aplicação integra frontend, backend e banco de dados, permitindo que as informações sejam armazenadas e atualizadas de forma dinâmica.

O controle de estoque mínimo auxilia na identificação de produtos que precisam de reposição, enquanto o registro das movimentações permite acompanhar as entradas provenientes da fabricação e as saídas provenientes dos pedidos.

A utilização do algoritmo QuickSort também permite atender ao requisito de ordenação dos produtos de forma programada no backend.

Dessa forma, o projeto demonstra na prática a utilização de conceitos de desenvolvimento web, API REST, banco de dados relacional, CRUD, controle de estoque, autenticação e algoritmos de ordenação.