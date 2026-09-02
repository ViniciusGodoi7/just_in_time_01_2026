# 📦 Sistema Just in Time — Gestão de Produção MDF

Sistema Web desenvolvido para auxiliar no **controle de produção e estoque de produtos em MDF**, permitindo cadastrar produtos, registrar entradas e saídas e acompanhar a quantidade disponível em estoque.

O projeto foi desenvolvido como atividade acadêmica, utilizando **Node.js, Express, MySQL, HTML, CSS e JavaScript**.

---

## 📋 Sobre o projeto

O sistema foi criado com base no conceito de **Just in Time**, buscando facilitar o controle da produção de acordo com a necessidade do estoque.

Através da aplicação, o usuário consegue cadastrar os produtos fabricados, definir uma quantidade mínima de estoque e registrar as movimentações realizadas.

Quando um produto é fabricado, sua quantidade é adicionada ao estoque. Já quando um pedido é registrado, a quantidade correspondente é retirada.

---

## 🚀 Funcionalidades

* 🔐 Sistema de login;
* 📦 Cadastro de produtos;
* 🔎 Pesquisa de produtos;
* ✏️ Edição de produtos;
* 🗑️ Exclusão de produtos;
* 📊 Controle de quantidade em estoque;
* ⚠️ Controle de estoque mínimo;
* 🏭 Registro de produtos fabricados;
* 🛒 Registro de pedidos;
* 📋 Histórico de movimentações;
* 👤 Identificação do usuário responsável pela movimentação;
* 🔤 Ordenação dos produtos utilizando QuickSort.

---

## 🖥️ Telas do sistema

### 🔐 Tela de Login

Página utilizada para realizar o acesso ao sistema.

![Tela de Login](./img/login.png)

---

### 🏠 Página Inicial

Página principal apresentada após o usuário entrar no sistema.

![Página Inicial](./img/home.png)

---

### 📦 Cadastro de Produtos

Tela responsável pelo cadastro e gerenciamento dos produtos.

![Produtos](./img/produtos.png)

---

### 🏭 Controle de Produção

Área utilizada para registrar produtos fabricados e pedidos.

![Produção](./img/producao.png)

---

> **Observação:** coloque as imagens do projeto dentro de uma pasta chamada `img` e mantenha os nomes dos arquivos iguais aos utilizados acima.
> Caso suas imagens tenham outros nomes, basta alterar os caminhos no README.

---

## 🛠️ Tecnologias utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Banco de dados

* MySQL
* mysql2

### Ferramentas

* Visual Studio Code
* XAMPP
* phpMyAdmin
* Git
* GitHub

---

## 📁 Estrutura do projeto

```text
sistema-jit-mdf/
│
├── config/
│   └── database.js
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── produtos.html
│   ├── producao.html
│   └── style.css
│
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── produtoController.js
│   │   └── producaoController.js
│   │
│   └── routes.js
│
├── img/
│   ├── login.png
│   ├── home.png
│   ├── produtos.png
│   └── producao.png
│
├── database.sql
├── documentacao.md
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## 🗄️ Banco de dados

O projeto utiliza o **MySQL** para armazenar os dados.

O banco utilizado é:

```text
preparacao_db
```

As principais tabelas são:

```text
usuarios
produtos
movimentacoes_estoque
```

### Relacionamento

```text
USUARIOS
    │
    │
    ▼
MOVIMENTACOES_ESTOQUE
    ▲
    │
    │
PRODUTOS
```

Um usuário pode realizar várias movimentações e um produto pode possuir várias movimentações de estoque.

---

## ⚙️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Depois entre na pasta:

```bash
cd nome-do-projeto
```

---

### 2. Instalar as dependências

Execute:

```bash
npm install
```

---

### 3. Configurar o MySQL

Abra o **XAMPP** e inicie o:

```text
MySQL
```

Depois abra o **phpMyAdmin** e execute o arquivo:

```text
database.sql
```

Esse arquivo cria o banco de dados e suas respectivas tabelas.

---

### 4. Conferir a conexão

Verifique o arquivo:

```text
config/database.js
```

A configuração utilizada no projeto é semelhante a:

```javascript
host: "127.0.0.1",
user: "root",
password: "",
database: "preparacao_db"
```

Caso o seu MySQL tenha uma senha diferente, altere o campo `password`.

---

### 5. Iniciar o servidor

Execute:

```bash
npm start
```

Depois abra o navegador e acesse:

```text
http://localhost:3000
```

---

## 🔑 Acesso para teste

O banco possui usuários cadastrados para facilitar os testes.

Exemplo:

```text
E-mail: carlos@mdf.com
Senha: 123456
```

Também existem outros usuários cadastrados no `database.sql`.

---

## 🔄 Funcionamento do estoque

O estoque é alterado de acordo com a movimentação registrada.

### Produto fabricado

Quando um produto é fabricado:

```text
Estoque atual + quantidade fabricada
```

Exemplo:

```text
Estoque: 10
Produção: 5

Resultado: 15 unidades
```

### Pedido

Quando um pedido é registrado:

```text
Estoque atual - quantidade solicitada
```

Exemplo:

```text
Estoque: 15
Pedido: 4

Resultado: 11 unidades
```

O sistema também verifica se existe estoque suficiente antes de realizar uma saída.

---

## ⚠️ Estoque mínimo

Cada produto possui uma quantidade mínima configurada.

Quando o estoque fica abaixo desse valor, o sistema consegue identificar que o produto necessita de atenção.

Exemplo:

```text
Estoque atual: 3
Estoque mínimo: 10
```

Nesse caso, o produto está abaixo do estoque mínimo.

---

## 🔤 Ordenação com QuickSort

Os produtos da área de produção são organizados alfabeticamente utilizando o algoritmo **QuickSort**.

O algoritmo utiliza um elemento como referência (`pivot`) e divide os demais elementos em grupos menores e maiores, realizando o processo de forma recursiva até obter a lista ordenada.

---

## 🔗 Principais rotas da API

### Login

```http
POST /api/login
```

### Produtos

```http
GET /api/produtos
POST /api/produtos
PUT /api/produtos/:id
DELETE /api/produtos/:id
```

### Produção

```http
GET /api/producao/produtos
POST /api/producao/movimentacao
```

---

## 📚 Documentação

Para consultar informações mais detalhadas sobre o funcionamento do sistema, banco de dados, API e estrutura dos arquivos, consulte:

[📖 Documentação completa](./documentacao.md)

---

## 🎯 Objetivo acadêmico

Este projeto foi desenvolvido com o objetivo de colocar em prática conhecimentos relacionados a:

* Desenvolvimento Full Stack;
* Criação de APIs;
* Node.js e Express;
* Banco de dados MySQL;
* Operações CRUD;
* Relacionamentos entre tabelas;
* Controle de estoque;
* Autenticação de usuários;
* Algoritmos de ordenação;
* Desenvolvimento de interfaces web.

---

## 👨‍💻 Desenvolvedor

**Vinicius Godoi**

Projeto desenvolvido para fins acadêmicos — SENAI.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e acadêmicos.
