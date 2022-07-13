const prompt = require('prompt-sync')();
const fs = require('fs');
function Item(name,qun,price)//construtor func
{
    this.name=name;
    this.qun=qun;
    this.price=price;

}
exports.deleteItem=(price,name,qun)=>{  //taking id as parameter
    let itemArr = JSON.parse(fs.readFileSync("item.json"));
     itemArr = itemArr.filter(Item=>Item.price != price && Item.name!=name && Item.qun!=qun) //del that id and update that id object
    fs.writeFile("item.json",JSON.stringify(itemArr),(err)=>
        {
             if(err)
             console.log('Something went wrong');
             else
             console.log('Saved successfully');
        })
    
}