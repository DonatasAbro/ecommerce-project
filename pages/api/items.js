export default function handler(req, res) {
  res.status(200).json([
    { itemId: "Item 1", picUrl: "https://picsum.photos/seed/Item1/500" },
    { itemId: "Item 2", picUrl: "https://picsum.photos/seed/Item2/500" },
    { itemId: "Item 3", picUrl: "https://picsum.photos/seed/Item3/500" },
    { itemId: "Item 4", picUrl: "https://picsum.photos/seed/Item4/500" },
    { itemId: "Item 5", picUrl: "https://picsum.photos/seed/Item5/500" },
  ]);
}
