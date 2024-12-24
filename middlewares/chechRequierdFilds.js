const checkRequiredFields = (req, res, next) => {
  const { category, price } = req.body;

  if (!category || !price || price < 0) {
    return res.status(400).json({ message: 'required all input' });
  }
  next();
};

module.exports = checkRequiredFields;
