const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Post = require('./models/post')
const bodyParser = require('body-parser')
app.use(bodyParser.json())



mongoose.connect('mongodb://localhost:27017/express-love-api')

const db = mongoose.connection
db.on('error', console.log)
db.once('open', () => {
  let post = new Post({title: 'mongoose usage'})
  console.log('save post')
  post.save(function(err){
    if(err) console.log(err)
  })
  console.log('success!')
})


app.get('/posts', (req, res) => {
  Post.find().sort({'createdAt': -1}).exec(function(err, posts) {
    if (err) return res.status(500).json({error: err.message})
    res.json({ posts })
  })
})

app.get('/post/:id', (req, res) => {
  Post.find({_id: req.params.id}).exec(function(err, post) {
    if (err) return res.status(500).json({error: err.message})
    res.json({ post })
  })
})


app.post('/post', (req, res) => {
  console.log(`POST /post`, req.body)
  var post = new Post(req.body);
  post.save(function(err){
    if(err) console.log(err)
    res.json({ msg: 'post saved'})
  })
} )


app.put('/post/:id', function(req, res) {
  if (req.body.title === '') return res.status(400).json({error: '文章标题不能为空！'})
  Post.findById({_id: req.params.id}, function(err, post) {
    if (err) return res.status(500).json({error:  err.message})
    for (prop in req.body) {
      post[prop] = req.body[prop]
    }
    post.save(function(err) {
      if (err) return res.status(500).json({error: err.message})
      res.json({
        message: '文章更新成功了！'
      })
    })
  })
})

app.delete('/post/:id', function(req, res) {
  Post.findById({_id: req.params.id}, function(err, post) {
    if (err) return res.status(500).json({error: err.message})
    post.remove(function(err){
      if (err) return res.status(500).json({error: err.message})
      res.json({ message: '文章已经删除了！' })
    })
  })
})

app.listen(3000, () => {
  console.log('running on port 3000...')
})
