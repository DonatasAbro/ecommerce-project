import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const items = await db.collection("item-list").find({}).toArray();
  return res.status(200).json(items);
}
