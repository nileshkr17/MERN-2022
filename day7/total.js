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
    let itemArr = JSON.parse(fs.readFileSync("item.json")); //reading file sync
    console.log(`\nCart item(s):-\n ${JSON.stringify(itemArr)}\n`)
    let totPrice=0;
    for(let i=0;i<itemArr.length;i++){
        totPrice+= parseFloat(itemArr[i].price*itemArr[i].qun)
    }
    console.log(`Total amount of purchase:- ${totPrice}`)
    
}