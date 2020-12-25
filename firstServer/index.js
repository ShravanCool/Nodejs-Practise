//================Without using Express======================
//const http = require("http");

//http.createServer((req,res) => {
    //res.write("Server is Up and Running");
    //res.end();
//}).listen(3000);


//================Using Express=============================
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", (req,res) => {
    res.send("Server is Up and Running");
});

app.listen(3000, () => {
    console.log("Server is Up and Running");
});

const routes = require("./routes/routes");

app.use("/routes",routes);
