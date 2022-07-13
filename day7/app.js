const createUser = require('./create');
const prompt = require('prompt-sync')();

const operation = prompt('Which of the following you want to do: ');
/*
 add
 updtae
 list
 del

*/
switch(operation){
    case 'add':
                createUser.addUser()
                break;
    case 'update':
                break;
    case 'delete':
                break;
    default:
        console.log('No operation is selected')
        break;
}