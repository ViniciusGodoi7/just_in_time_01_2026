const db = require('../../config/database');

// Algoritmo QuickSort exigido pelo Requisito 7.1.1
function quickSortProdutos(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].nome.localeCompare(pivot.nome) < 0) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSortProdutos(left), pivot, ...quickSortProdutos(right)];
}

exports.listarOrdenados = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM produtos');
        const ordenados = quickSortProdutos(rows);
        res.json(ordenados);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao carregar produtos.' });
    }
};

exports.registrarMovimentacao = async (req, res) => {
    const { produto_id, usuario_id, tipo, quantidade, data_movimentacao } = req.body;

    if (!produto_id || !usuario_id || !tipo || !quantidade || !data_movimentacao) {
        return res.status(400).json({ message: 'Preencha todos os campos.' });
    }

    const qtd = parseInt(quantidade);
    if (isNaN(qtd) || qtd <= 0) {
        return res.status(400).json({ message: 'A quantidade deve ser maior que zero.' });
    }

    try {
        const [pRows] = await db.query('SELECT * FROM produtos WHERE id = ?', [produto_id]);
        if (pRows.length === 0) return res.status(404).json({ message: 'Produto não encontrado.' });

        const produto = pRows[0];
        let novoEstoque = produto.qtd_estoque;

        if (tipo === 'FABRICADO') {
            novoEstoque += qtd;
        } else if (tipo === 'PEDIDO') {
            novoEstoque -= qtd;
            if (novoEstoque < 0) {
                return res.status(400).json({ message: 'Estoque insuficiente para atender este pedido.' });
            }
        } else {
            return res.status(400).json({ message: 'Tipo de movimentação inválido.' });
        }

        await db.query('UPDATE produtos SET qtd_estoque = ? WHERE id = ?', [novoEstoque, produto_id]);
        await db.query(
            'INSERT INTO movimentacoes_estoque (produto_id, usuario_id, tipo, quantidade, data_movimentacao) VALUES (?, ?, ?, ?, ?)',
            [produto_id, usuario_id, tipo, qtd, data_movimentacao]
        );

        let alertaEstoque = false;
        if (tipo === 'PEDIDO' && novoEstoque < produto.qtd_minima) {
            alertaEstoque = true;
        }

        res.json({
            message: 'Movimentação registrada com sucesso.',
            alertaEstoque,
            estoqueAtual: novoEstoque,
            estoqueMinimo: produto.qtd_minima
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao processar movimentação.' });
    }
};