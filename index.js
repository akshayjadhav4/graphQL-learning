import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Set up Done.");
});

const PORT = 2004;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
