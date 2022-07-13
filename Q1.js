let n=Number(prompt('Enter number of customers'));
let custArr=[];
for(let i=0;i<n;i++)
{
    cname=prompt(`Enter the name of customer ${i+1}`);
    email=prompt(`Enter the email of customer ${i+1}`);
    phone=prompt(`Enter the phone of customer ${i+1}`);
    no_of_items_shopped=Number(prompt(`Enter the no of times the customer ${i+1} shopped`));
    let purchaseHistory=[];
    for(let j=0;j<no_of_items_shopped;j++)
    {
        date_of_purchase=prompt(`Date of purchase number ${j+1}`);
        let itemsPurchased=[];
        no_of_items=Number(prompt(`Enter the number of items in purchase number ${j+1}`));
        for(let k=0;k<no_of_items;k++)
        {
            productName=prompt(`Enter the name of product ${k+1}`);
            productPrice=Number(prompt(`Enter the price of product ${k+1}`));
            let purchase_obj={
                productName,
                productPrice
            }
            itemsPurchased.push(purchase_obj);
        }
        let history_obj={
            date_of_purchase,
            itemsPurchased
        }
        purchaseHistory.push(history_obj);
    }
    const obj={
        cname,
        email,
        phone,
        no_of_items_shopped,
        purchaseHistory,
        total_purchase:function()
        {
            var totsum=0;
            for(let i=0;i<this.no_of_items_shopped;i++)
            {
                var sum_per_purchase=0;
                let temp= this.purchaseHistory[i].itemsPurchased;
                for(let j=0;j<temp.length;j++)
                {
                    sum_per_purchase = sum_per_purchase + temp[j].productPrice;
                }
                totsum=totsum+sum_per_purchase;
            }
            return totsum;
        }
    }
    custArr.push(obj);
}
console.log(custArr);

for(let i=0;i<n;i++)
{
    if(custArr[i].no_of_items_shopped>5)
    {
        console.log(`${custArr[i].cname} has shopped more than 5 times`);
    }
}

for(let i=0;i<n;i++)
{
    console.log(`${custArr[i].cname}  has shoppped total Rs.${custArr[i].total_purchase()}`)
}