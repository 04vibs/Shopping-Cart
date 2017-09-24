const route=require('express').Router();
const data=require('../db/models');

route.get('/cart',(req,res)=>{
  data.getItems().then((results)=>{
    res.send(results);
  });
});

route.get('/product',(req,res)=>{
  data.getProductsItems().then((results)=>{
    res.send(results);
  });
});

module.exports = route;
