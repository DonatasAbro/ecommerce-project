export default function handler(req, res) {
  const body = req.body;

  res.status(201).json({
    checkout: `${body.item1} ${body.item2} ${body.item3} ${body.item4} ${body.item5}`,
  });
}
