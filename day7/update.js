const prompt = require('prompt-sync')();
const fs = require('fs');
function Item(name,qun,price)//construtor func
{
    this.name=name;
    this.qun=qun;
    this.price=price;

}
exports.updateItem=(price,name)=>{  //taking id as parameter
    let itemArr = JSON.parse(fs.readFileSync("item.json"));
     itemArr = itemArr.filter(Item=>Item.price != price && Item.name!=name) //del that id and update that id object
    const qun = prompt('Enter new qun');
    const itemObj = new Item(name,qun,price);
    itemArr=[...itemArr,itemObj];
    fs.writeFile("item.json",JSON.stringify(itemArr),(err)=>
        {
             if(err)
             console.log('Something went wrong');
             else
             console.log('Saved successfully');
        })
    
}