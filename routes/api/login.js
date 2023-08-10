const express = require("express");
const jwt = require("jsonwebtoken");

const app = express.Router();

app.get('/api', (req,res) =>{
    
    res.json({
        message:"Hello King..... Welcome to the World of Future X."
    });
});


app.post('/post', verifyToken, (req,res) => {
    jwt.verify(req.token , 'secretkey' , (err, authData) =>{
        if(err){
            res.sendStatus(403);
        } else{
            res.json({
                message:'Post Done.....',
                authData
            });
        }
    });
});
// app.post()

app.post('/token',(req,res) =>{
    const user ={
        id:1,
        username:'King',
        email:'king@gmail.com'
    };

    jwt.sign({user:user}, "secretkey" ,(err,token) =>{
        res.json({
            token,
        });
    })
});

function verifyToken(req , res, next){
    const bearerHeader=req.headers['authorization'];
    if(typeof bearerHeader!== "undefined"){
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403); //forbidden
    }
}

module.exports = app
