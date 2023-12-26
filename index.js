const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const PAGE_VERIFY_TOKEN = "barachatbot123";
const ACCESS_TOKEN = "EAAPRjb5RBPEBOZCWlXvim8lRp2fJMw4jJ0eNxWmsKGTDnoWXbZBWzY6OuoLKf1O8Gcx4zj2BRuPpTOMiZC5bTZCcyR4NZBZBJHTl78odzxg50M4abWwj3xnTmx4YYuZCjH1vZC7DYNVqvV0i52pZBs7N1OicSjvWHDL868Am5esn6DvacFvjVBuR3D6K6Fz9l8vHYYxQZCV3Bqwf3PioV2sG2dYVlnX18ZD";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("سلام أنا شاب بوت.");
});

app.get("/webhook", (req, res) => {
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (token === PAGE_VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post("/webhook", (req, res) => {
  const body = req.body;

  if (body.object === "page") {
    body.entry.forEach((entry) => {
      const webhookEvent = entry.messaging[0];
      console.log(webhookEvent);

      // Handle your messaging events here

    });

    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
});

// Set up your server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});