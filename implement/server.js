const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//MIDDleWare
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser()); // to store user access token



app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('login', (req, res)=>{
    let token = req.body.token
    console.log(token)
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})