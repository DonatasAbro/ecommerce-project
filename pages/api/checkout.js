export default function handler(req, res) {
  const cartItems = req.body;

  res.status(201).json({
    cartItems: `${cartItems}`,
  });
}
