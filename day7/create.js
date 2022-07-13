const prompt = require('prompt-sync')();
const fs = require('fs');
function Item(name,qun,price)//construtor func
{
    this.name=name;
    this.qun=qun;
    this.price=price;

}
exports.addItem=()=>
    {
        const no_of_items = prompt('Enter the number of Items');
        let itemArr = [];
        for(let i=0;i<no_of_items;i++)
            {
                const name= prompt('Enter item name: ');
                 const qun = prompt('Enter item quantity:');
                 const price = prompt('Enter item price:');
                 const item = new Item(name,qun,price); //user object passing id email etc
                 itemArr=[...itemArr,item];
        //userArr.push(user);
            }
        fs.writeFile("item.json",JSON.stringify(itemArr),(err)=>
        {
             if(err)
             console.log('Something went wrong');
             else
             console.log('Saved successfully');
        })

    }
    
    //fs.writeFileSync("user.json",JSON.stringify(userArr));
/*
{
    id,
    name,
    email,
    phone
}*/