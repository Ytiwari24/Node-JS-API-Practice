const express=require('express')
const router=express.Router()
const uuid=require('uuid')
let users=require('../../Users')

///********GET ALL USERS**********///
router.get('/',(req,res) => {
    res.json(users);
});

///********GET ALL USERS BY ID**********///
router.get('/:id',(req,res) =>{
    const found = users.some(user =>user.id ===parseInt(req.params.id))

    if(found){
        res.json(users.filter(user => user.id ===parseInt(req.params.id)))
    }else{
        res.sendStatus(400)
    }
})




module.exports =router