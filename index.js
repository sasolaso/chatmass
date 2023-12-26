const  express = require("express");
const  bodyParser = require("body-parser");
const  request = require("request");

const app = express();

app.set("port", (process.env.PORT || 8000));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req,res){
res.send("سلام أنا شاب بوت.");

});

app.get("/webhook", function(req,res){

  const PAGE_VERIFY_TOKEN = "barachatbot123";
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  
   if (token === PAGE_VERIFY_TOKEN) {
     res.status(200).send(challenge);  

    } else {

    res.sendStatus(403);
  }
     
});



app.listen(app.get("port"), function(){

console.log("server is reninig and lestening on port" + app.get("port"));

});