import express from "express";
import resolvers from "./resolvers";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("Set up Done.");
});

const root = resolvers;

app.use("/graphql", graphqlHTTP({ schema, rootValue: root, graphiql: true }));

const PORT = 2004;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
