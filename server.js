const express = require('express')
const knex = require('knex')
const cors = require('cors')
const bcrypt = require('bcryptjs');


const signup = require('./controllers/signup');
const signin = require('./controllers/signin');
const del = require('./controllers/delete');
const create = require('./controllers/create');
const fetchBlogs = require('./controllers/fetchBlogs');


const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'psql',
        database: 'blogspot',
        port: 5432
    }
});

const app = express();

app.use(express.json())
app.use(cors())

// Sign Up
app.post('/signup', (req, res) => {signup.handleSignup(req, res, db, bcrypt)})
// Sign In
app.post('/signin', signin.handleSignin(db, bcrypt))
// Delete Blog
app.delete('/delete/:id', (req, res) => {del.handleDelete(req, res, db)})
// Create Blog
app.post('/create', (req, res) => {create.handleCreate(req, res, db)})
// Get Blogs
app.get('/blogs', (req, res) => {fetchBlogs.handleFetchBlogs(req, res, db)})



app.listen(process.env.PORT || 3003, ()=>{
    console.log(`app running on port ${process.env.PORT}`)
})







