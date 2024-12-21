const express = require("express");
const admin = require("./firebaseAdmin");

const app = express();
const port = 3000;

app.get("/some-endpoint", async (req, res) => {
  try {
    const db = admin.firestore();
    const doc = await db.collection("lyrics").doc("isE7hppuvNBxN3RHyQDe").get();
    if (!doc.exists) {
      res.status(404).send("No such document!");
    } else {
      res.status(200).send(doc.data());
    }
  } catch (error) {
    res.status(500).send("Error getting document: " + error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
