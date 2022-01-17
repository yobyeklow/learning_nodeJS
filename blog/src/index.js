const express = require('express');
const { engine } = require ('express-handlebars');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));

//Template Engine 
app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views', path.join(__dirname,'/resource/views'));

app.get('/',(req,res)=> res.render('home'));

app.get('/search',function(request,respond){
    return respond.render('search');
})
app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`));
