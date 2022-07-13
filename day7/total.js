const prompt = require('prompt-sync')();
const no_of_items= require('./create');
const fs = require('fs');
function Item(name,qun,price)//construtor function
{
    this.name=name;
    this.qun=qun;
    this.price=price;

}
exports.total=()=>{  //taking id as parameter
    let itemArr = JSON.parse(fs.readFileSync("item.json"));
    let sum=0;
     for(let i=0;i<no_of_items;i++)
     {
        sum=sum+
     }
    
}