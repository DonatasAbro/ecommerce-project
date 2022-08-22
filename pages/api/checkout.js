export default function handler(req, res) {
  const cartItems = req.body;

  res.status(200).json(cartItems);
}
