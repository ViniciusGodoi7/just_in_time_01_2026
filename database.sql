CREATE DATABASE IF NOT EXISTS preparacao_db;
USE preparacao_db;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    custo DECIMAL(10,2) NOT NULL,
    qtd_estoque INT NOT NULL DEFAULT 0,
    qtd_minima INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS movimentacoes_estoque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto_id INT NOT NULL,
    usuario_id INT NOT NULL,
    tipo ENUM('FABRICADO', 'PEDIDO') NOT NULL,
    quantidade INT NOT NULL,
    data_movimentacao DATETIME NOT NULL,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Registros Iniciais de Usuários (com proteção contra duplicidade por email)
INSERT INTO usuarios (nome, email, senha) VALUES
('Carlos Silva', 'carlos@mdf.com', '123456'),
('Ana Souza', 'ana@mdf.com', '123456'),
('Marcos Lima', 'marcos@mdf.com', '123456')
ON DUPLICATE KEY UPDATE senha = VALUES(senha);

-- Registros Iniciais de Produtos (inserção simples para evitar erros de índice)
INSERT INTO produtos (id, nome, descricao, custo, qtd_estoque, qtd_minima) VALUES
(1, 'Chapa MDF 15mm Crua', 'Painel de madeira de média densidade 2750x1850mm', 120.50, 50, 15),
(2, 'Caixa Organizadora MDF', 'Caixa montada com tampa 30x30cm', 15.00, 8, 10),
(3, 'Mesa Infantil MDF', 'Mesa de estudo infantil pintada de branco', 85.00, 25, 5)
ON DUPLICATE KEY UPDATE custo = VALUES(custo);

-- Movimentações de Estoque (sem duplicidade desnecessária)
INSERT INTO movimentacoes_estoque (produto_id, usuario_id, tipo, quantidade, data_movimentacao) VALUES
(1, 1, 'FABRICADO', 20, '2026-03-01 08:30:00'),
(2, 2, 'PEDIDO', 5, '2026-03-01 10:15:00'),
(3, 3, 'FABRICADO', 10, '2026-03-02 09:00:00');