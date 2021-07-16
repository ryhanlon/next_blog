import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      !name.trim() === "" ||
      !message ||
      !message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    // store in data base
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://ryhanlon:hvrqGH8DsIQP8dZ2@cluster0.hmkrm.mongodb.net/myBlogLesson?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }
    console.log(newMessage);
    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      await client.close();
      res.status(500).json({ message: "Storing message failed." });
      return;
    }
    await client.close();
    res.status(201).json({ message: "Successfully stored message!" });
  }
}

export default handler;
