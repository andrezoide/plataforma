const getAll = (req, res) => {
  return res.status(200).json({ message: "controller ta rolando"});
};

module.exports = {
  getAll,
}