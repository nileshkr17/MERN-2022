//const createUser = require('./create');
const {addItem} =require('./create');
const {updateItem} =require('./update');
const {deleteItem} =require('./delete');
const prompt = require('prompt-sync')();
prompt('To add item: add \t To update item: update \t To delete item: delete');
const operation = prompt('Which of the following you want to do: ');
/*
 add
 update
 list
 del
 

*/


switch(operation){
    case 'add':
                //createUser.addUser()
                addItem()
                break;
    case 'update': let name = prompt('Enter the item name you want to update(case sensi): ');
                    let price = prompt('Enter the price of that item:');
                    updateItem(price,name);
                    break;
    case 'delete':
                     
                     let p = prompt('Enter the price of that item:');
                     let n = prompt('Enter the item name you want to update(case sensi): ');
                     let qun = prompt('Enter the qunatity of that item:');
                    deleteItem(p,n,qun);
                break;
    case 'total' :
                    total()
                    break;
    default:
        console.log('No operation is selected')
        break;
}