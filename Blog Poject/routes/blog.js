const express = require('express')
const path = require('path')
const blogs = require('../data/blogs.js')

const router = express.Router()

router.get('/', (req, res) => {
    // res.sendFile((path.join(__dirname, '../views/layout/index.html')))
    res.render('home')
})
router.get('/blog', (req, res) => {
    res.render('blogHome', {
        blogs: blogs
    });
    
    // res.sendFile((path.join(__dirname, '../templates/blogHome.html')))
})

router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug

    })
       
    console.log(myBlog)
    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    });

    
    // res.sendFile((path.join(__dirname, '../templates/blogPage.html')))
})

module.exports = router