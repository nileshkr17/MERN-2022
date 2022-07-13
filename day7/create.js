const prompt = require('prompt-sync')();
const fs = require('fs');
function User(id,name,email,phone)//construtor func
{
    this.name=name;
    this.email=email;
    this.id=id;
    this.phone=phone;

}
exports.addUser=()=>
    {
        const howmanyusers = prompt('Enter the number of users:');
        let userArr = [];
        for(let i=0;i<howmanyusers;i++)
            {
                 const name = prompt('Enter user name: ');
                 const id =prompt('Enter user id:');
                 const email = prompt('Enter User email:');
                 const phone = prompt('Enter user phone number:');
                 const user = new User(name,id,email,phone); //user object passing id email etc
                 userArr=[...userArr,user];
        //userArr.push(user);
            }
        fs.writeFile("user.json",JSON.stringify(userArr),(err)=>
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