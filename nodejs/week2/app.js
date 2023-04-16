//warmup
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");


app.use(express.json());

// GET /search
app.get("/search", (req, res) => {
  const q = req.query.q;

  // Read the contents of the documents.json file
  const data = fs.readFileSync("./dokuments.json");

  //  JSON data into an array of objects
  const documents = JSON.parse(data);

  let results = documents;

  // If q is provided, filter the documents by the q value
  if (q) {
    results = results.filter((doc) => {
      for (const key in doc) {
        if (doc.hasOwnProperty(key) && doc[key].toString().toLowerCase().includes(q.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }

  // Return the matching documents as the response
  res.send(results);
});

// GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Read the contents of documents.json file
  const data = fs.readFileSync("./documents.json");

  // JSON data into an array of objects
  const documents = JSON.parse(data);

  // Find document with matching id
  const document = documents.find((doc) => doc.id === id);

  // If no matching, respond with a 404 Not Found status
  if (!document) {
    res.status(404).send("Document not found");
    return;
  }

  // Return the matching document
  res.send(document);
});

// POST /search
app.post("/search", (req, res) => {
  const q = req.query.q;
  const fields = req.body.fields;

  // Read contents of the documents.json file
  const data = fs.readFileSync("./documents.json");

  // JSON data into an array of objects
  const documents = JSON.parse(data);

  let results = documents;

  // If q is provided, filter documents by the q value
  if (q) {
    results = results.filter((doc) => {
      for (const key in doc) {
        if (doc.hasOwnProperty(key) && doc[key].toString().toLowerCase().includes(q.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }

  // If fields is provided, filter the documents by the fields values
  if (fields) {
    results = results.filter((doc) => {
      for (const key in fields) {
        if (doc.hasOwnProperty(key) && doc[key].toString() === fields[key].toString()) {
          return true;
        }
      }
      return false;
    });
  }

  // If both q and fields are provided, respond with status 400 Bad Request
  if (q && fields) {
    res.status(400).send("Both q and fields cannot be provided");
    return;
  }

  // Return the matching documents 
  res.send(results);
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
