
var express=require('express');
var app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/api/users'))

app.listen(3000, ()=>{
    console.log('Server Started on port 3000')
})
// app.get('/',function(req,res){
//     res.send('Hello King');
// })

// var server = app.listen(8081,function(){
//     var host= server.address().address
//     var port=server.address().port

//     console.log('Example app listening at ',host,port)
// })

