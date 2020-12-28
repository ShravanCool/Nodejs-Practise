const router = require("express").Router();
const User = require("../model/User");
const {registerValidation} = require("../validation");
const {Bcrypt} = require("bcrypt-rust-wasm");
const bcrypt = Bcrypt.new(parseInt(process.env.SALT_ROUNDS));

router.post("/register", async(req,res)=>{
    try{
    const {name,email,password} = req.body;
    const {error} = registerValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    const exists = await User.findOne();
    if(exists){
        return res.status(409).json({Error: "User already exists"});
    }
    const newUser = new User({
        name: name,
        email: email,
        password: bcrypt.hashSync(password)
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
    } catch(err){
        res.json(err);
    }
});

module.exports = router;
