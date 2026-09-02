# 📦 Sistema Just in Time — Gestão de Produção MDF

## 📌 Sobre o Projeto

O **Sistema Just in Time** foi desenvolvido com o objetivo de auxiliar no controle da produção e do estoque de produtos fabricados em MDF.

O sistema permite que o usuário acompanhe os produtos cadastrados, controle a quantidade disponível em estoque, registre produções e pedidos, além de consultar o histórico das movimentações realizadas.

O projeto foi desenvolvido como atividade acadêmica, utilizando tecnologias de desenvolvimento **Web Full-Stack**.

---

## ⚙️ Funcionalidades

* 🔐 Sistema de login de usuários
* 👤 Identificação do usuário responsável pelas movimentações
* 📦 Cadastro de produtos
* ✏️ Edição de produtos
* 🗑️ Exclusão de produtos
* 🔎 Pesquisa de produtos
* 📊 Controle de estoque
* ⚠️ Definição de estoque mínimo
* 🏭 Registro de produtos fabricados
* 📤 Registro de pedidos e saídas do estoque
* 📋 Histórico de movimentações
* 📅 Registro da data das movimentações
* 🔄 Atualização automática da quantidade em estoque
* 🔢 Organização dos produtos utilizando o algoritmo QuickSort

---

## 💻 Tecnologias Utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript

### Back-end

* Node.js
* Express.js
* MySQL
* mysql2

### Ferramentas

* Visual Studio Code
* XAMPP
* phpMyAdmin
* Git
* GitHub

---

## 📁 Estrutura do Projeto

```text
just_in_time_01_2026/
│
├── config/
│   └── database.js
│
├── controllers/
│
├── public/
│   ├── css/
│   ├── js/
│   ├── login.html
│   └── ...
│
├── src/
│   ├── routes/
│   └── ...
│
├── database.sql
├── documentacao.md
├── package.json
├── package-lock.json
└── server.js
```

---

## 🗄️ Banco de Dados

O sistema utiliza o **MySQL** como banco de dados.

O banco utilizado no projeto possui o nome:

```text
preparacao_db
```

### Principais tabelas

#### Usuários

Armazena os usuários que possuem acesso ao sistema.

```text
usuarios
```

Campos principais:

* `id`
* `nome`
* `email`
* `senha`

#### Produtos

Armazena as informações dos produtos fabricados.

```text
produtos
```

Campos principais:

* `id`
* `nome`
* `descricao`
* `custo`
* `qtd_estoque`
* `qtd_minima`

#### Movimentações de Estoque

Registra as entradas e saídas de produtos.

```text
movimentacoes_estoque
```

Campos principais:

* `id`
* `produto_id`
* `usuario_id`
* `tipo`
* `quantidade`
* `data_movimentacao`

Os tipos de movimentação utilizados são:

```text
FABRICADO
PEDIDO
```

---

## 🔧 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

### 2. Instalar as dependências

Execute:

```bash
npm install
```

### 3. Configurar o MySQL

Abra o **XAMPP** e inicie o:

```text
MySQL
```

Depois abra o **phpMyAdmin**.

Importe o arquivo:

```text
database.sql
```

Esse arquivo será responsável por criar o banco de dados e suas tabelas.

### 4. Conferir a conexão

O arquivo responsável pela conexão com o banco é:

```text
config/database.js
```

A configuração utilizada no projeto é:

```javascript
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'preparacao_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
```

Caso o MySQL esteja configurado com outra senha, altere o campo:

```javascript
password: ''
```

### 5. Iniciar o servidor

Execute:

```bash
npm start
```

Se tudo estiver funcionando corretamente, aparecerá uma mensagem semelhante a:

```text
Servidor rodando com sucesso em http://localhost:3000
```

Depois acesse no navegador:

```text
http://localhost:3000
```

---

## 🔑 Usuário para Teste

O banco de dados já possui alguns usuários cadastrados.

Exemplo:

```text
E-mail: carlos@mdf.com
Senha: 123456
```

Também existem outros usuários cadastrados no arquivo `database.sql`.

---

## 📦 Controle de Estoque

O sistema trabalha com dois tipos principais de movimentação.

### 🏭 Produto Fabricado

Quando um produto é fabricado, sua quantidade é adicionada ao estoque.

Exemplo:

```text
Produto: Caixa Organizadora MDF
Quantidade fabricada: 10
```

O estoque será atualizado adicionando as 10 unidades.

### 📤 Pedido

Quando um pedido é registrado, a quantidade correspondente é retirada do estoque.

Exemplo:

```text
Produto: Caixa Organizadora MDF
Quantidade solicitada: 3
```

Nesse caso, o sistema diminui 3 unidades do estoque.

---

## ⚠️ Estoque Mínimo

Cada produto possui uma quantidade mínima definida no cadastro.

Essa informação permite identificar quando o estoque está abaixo do nível recomendado.

Exemplo:

```text
Estoque atual: 4
Estoque mínimo: 10
```

Nesse caso, o produto precisa ser produzido novamente para que o estoque seja reposto.

---

## 🔢 Algoritmo QuickSort

O projeto também utiliza o algoritmo de ordenação **QuickSort** para organizar os produtos.

O algoritmo permite ordenar os registros de acordo com determinado critério, facilitando a visualização e localização dos produtos no sistema.

---

## 🌐 Rotas da API

O back-end utiliza o **Express.js** para disponibilizar as rotas da aplicação.

Algumas das funcionalidades disponibilizadas pela API são:

```text
/api
```

Rotas relacionadas a:

* Usuários
* Produtos
* Produção
* Pedidos
* Movimentações de estoque

As requisições são processadas pelo servidor Node.js e os dados são armazenados no MySQL.

---

## 📚 Documentação

Para consultar informações mais detalhadas sobre o funcionamento e desenvolvimento do sistema, acesse:

[📖 Documentação completa](./documentacao.md)

---

## 🎯 Objetivo Acadêmico

O projeto foi desenvolvido com finalidade acadêmica, buscando colocar em prática conceitos de:

* Desenvolvimento Web
* JavaScript
* Node.js
* Express
* Banco de Dados
* SQL
* APIs
* CRUD
* Controle de estoque
* Algoritmos de ordenação
* Git e GitHub

---

## 👨‍💻 Desenvolvedor

**Vinicius Godoi**

Projeto desenvolvido para fins educacionais no **SENAI**.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e acadêmicos.
