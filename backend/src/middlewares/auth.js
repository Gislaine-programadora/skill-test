// Middleware simples de autenticação (mock)
module.exports = function requireAuth(req, res, next) {
  // Aqui você poderia validar JWT, mas para teste vamos liberar tudo
  // Exemplo: if (!req.headers.authorization) return res.status(401).json({ error: 'Unauthorized' });
  next();
};