const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}));

mongoose
    .connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(()=>console.log("connected to db"))
    .catch((err)=>console.log(err));

app.use("/posts", require("./routes/posts"));
app.listen(process.env.PORT, () => console.log("Server is up and running"));
