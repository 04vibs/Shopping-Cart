const Sequelize=require('sequelize');

const db=new Sequelize({

  database:'sb',
  username:'root',
  password:'puri',
  host:'localhost',
  dialect:'mysql',
  pool:{
    min:0,
    max:5,
    idle:10000
  }
});

var productList=[
                { name: 'Nike Shoes', price: 3000, quantity: 1},
                { name: 'Smart Phone', price: 10000, quantity: 1},
                { name: 'Power Bank', price: 1500, quantity: 1},
                { name: 'Head Phones', price: 1000, quantity: 1},
                { name: 'Dell Laptop', price: 45000, quantity: 1},
                { name: 'React book', price: 4000, quantity: 1},
                { name: 'Chair', price: 6000, quantity: 1}
                  ];

const Products=db.define('product',{
                                      id:{
                                        type:Sequelize.INTEGER,
                                        primaryKey:true,
                                        autoIncrement:true
                                      },
                                      name:Sequelize.STRING,
                                      price:Sequelize.INTEGER,
                                      quantity:Sequelize.INTEGER
                         });
const Carts=db.define('cart',{
                                id:{
                                  type:Sequelize.INTEGER,
                                  primaryKey:true,
                                  autoIncrement:true
                                },
                                name:Sequelize.STRING,
                                price:Sequelize.INTEGER,
                                quantity:Sequelize.INTEGER
});


db.sync({force: true}).then(() => {
       for(var i = 0; i < productList.length; i++) {
       console.log("Inside loop.");
       Products.create(productList[i]);
    }
    });

function getItems(){
  console.log("Inside getItems");
  return Carts.findAll();
}

function getProductsItems () {
          console.log("Inside getProductsItems");
          return Products.findAll();
        }

module.exports={
  getItems,
  getProductsItems,
};
