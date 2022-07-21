const express =require('express');
const cors=require('cors')
const mysql=require('mysql2');
const dotenv = require('dotenv');
const { title } = require('process');
const app = express();
dotenv.config()
const axios = require('axios')
const port= process.env.PORT || 5000
app.use(cors())
//db connection

const db =mysql.createConnection({
    host:'homelw-db.ckjtg3n8r0ue.us-east-1.rds.amazonaws.com', 
    user:'admin', 
    password:'sease1996',
    port: '3306',
    database: 'home_loungewear'
 });

 db.connect((err)=>{
    if(err){
        throw err;
    }
     console.log('MySql Connected...'+ db.state)
 });
// [const query = 'select * from products'
//  db.query(query, (err,res)=>{
//     if(err) throw err
//     else console.log(res)
//  })]
// show all (may not use)
app.get('/products',(req,res)=>{
    const query='SELECT * FROM products'
    db.query(query, (err,result)=> {
        if(err) throw err
        else res.send(result)
         
    })
    
})
// show tops
app.get('/products/tops',(req,res)=>{
    const query='SELECT id,title, description,price,img FROM products WHERE cat_id=1'
    db.query(query,(err,result)=>{
        if (err) throw err
        else res.send(result)
    })
})
// show bottoms
app.get('/products/bottoms',(req,res)=>{
    const query= 'SELECT * FROM products WHERE cat_id=2' 
    db.query(query,(err,result)=>{
        if(err) throw err
        else res.send(result)
    })
})

// show outerwear
app.get('/products/outerwear',(req,res)=>{
    const query= 'SELECT id,title, description,price,img FROM products WHERE cat_id=3' 
    db.query(query,(err,result)=>{
        if(err) throw err
        else res.send(result)
    })
});
// filter 25 and under 
app.get('/products/under25',(res,req)=>{
    const query=''
    db.query(query,(err,result)=>{
        if(err) throw err
        else res.send(result)
    })
})
//listening to server
app.listen(port, (err)=>{
    if(err) console.log(err)
    else console.log('connect to server')
});