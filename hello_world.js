//localhost:3000/api/users    <----- Run this code and Hit this URL in Postman
var express=require('express');
const users = require('./Users');
const events=require('./Events')
const cors=require('cors');
var app = express();
// const port=3000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/api/users'))
app.use('/events',require('./routes/api/events'))

// console.log(events);
// app.listen(4000,'0.0.0.0', ()=>{
//     console.log('Server Started on 4000')
// })


console.log(users);
// console.log(events);
app.listen(3000,'0.0.0.0', ()=>{
    console.log('Server Started on 3000')
})

// app.get('/',function(req,res){
//     res.send('Hello King');
// })

// var server = app.listen(8081,function(){
//     var host= server.address().address
//     var port=server.address().port

//     console.log('Example app listening at ',host,port)
// })

