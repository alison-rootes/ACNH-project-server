var express = require('express')//import express
var router = express.Router()

const sequelize = require('../db')
const Posts = sequelize.import('../models/posts')
const validateSession = require('../middleware/validate-session')

router.post('/', validateSession, (req, res) => {
    console.log(req.body)
    Posts.create({
        question: req.body.question,
        discription: req.body.discription,
        user: req.user.userName
    })
    .then(post => {
        res.json(post)
    })
    .catch(err => res.status(500).json(err));

});
router.get('/', (req, res) => {
    Posts.findAll()
    .then(post => {
        res.json(post)
    })
    .catch(err => res.status(500).json(err));
});

router.put('/:id', validateSession,(req, res) => {
    Posts.update(req.body, {where:{user:req.user.userName, id:req.params.id}})
    .then(data=> res.status (200).json(data))
})



router.delete('/:id', validateSession,(req, res) => {
    Posts.destroy( {where:{user:req.user.userName, id:req.params.id}})
    .then(data=> res.status (200).json(data))
})



module.exports = router;