const db = require('../../config/database');

exports.listar = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM produtos');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos.' });
    }
};

exports.criar = async (req, res) => {
    const { nome, descricao, custo, qtd_estoque, qtd_minima } = req.body;
    if (!nome || custo === undefined || qtd_estoque === undefined || qtd_minima === undefined) {
        return res.status(400).json({ message: 'Preencha todos os campos obrigatórios.' });
    }
    if (custo < 0 || qtd_estoque < 0 || qtd_minima < 0) {
        return res.status(400).json({ message: 'Valores numéricos não podem ser negativos.' });
    }

    try {
        await db.query(
            'INSERT INTO produtos (nome, descricao, custo, qtd_estoque, qtd_minima) VALUES (?, ?, ?, ?, ?)',
            [nome, descricao, custo, qtd_estoque, qtd_minima]
        );
        res.status(201).json({ message: 'Produto cadastrado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar produto.' });
    }
};

exports.atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, custo, qtd_estoque, qtd_minima } = req.body;

    if (!nome || custo === undefined || qtd_estoque === undefined || qtd_minima === undefined) {
        return res.status(400).json({ message: 'Preencha todos os campos obrigatórios.' });
    }

    try {
        await db.query(
            'UPDATE produtos SET nome = ?, descricao = ?, custo = ?, qtd_estoque = ?, qtd_minima = ? WHERE id = ?',
            [nome, descricao, custo, qtd_estoque, qtd_minima, id]
        );
        res.json({ message: 'Produto atualizado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produto.' });
    }
};

exports.deletar = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM produtos WHERE id = ?', [id]);
        res.json({ message: 'Produto removido com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir produto.' });
    }
};