const confrimDeleteMiddleware = (req, res, next) => {
  const confrimDelete = req.headers['confrim-delete'];

  if (confrimDelete !== 'yes') {
    return res.status(403).json({ message: 'u cannot delete this' });
  }
  next();
};

module.exports = confrimDeleteMiddleware;
