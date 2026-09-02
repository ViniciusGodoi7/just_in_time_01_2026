const db = require('../../config/database');

exports.login = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ success: false, message: 'Informe e-mail e senha.' });
    }

    try {
        const [rows] = await db.query('SELECT id, nome, email FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);

        if (rows.length === 0) {
            return res.status(401).json({ success: false, message: 'E-mail ou senha incorretos.' });
        }

        return res.json({ success: true, user: rows[0] });
    } catch (error) {
        console.error('ERRO NO LOGIN:', error);
        return res.status(500).json({ success: false, message: 'Erro interno no servidor.' });
    }
};