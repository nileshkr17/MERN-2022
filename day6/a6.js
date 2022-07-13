let n=Number(prompt(' Please Enter The Number of customers'));
let cusArr=[];
for(let i=0;i<n;i++)
{
    custName=prompt(`Name of customer ${i+1}:`);
    email=prompt(`Email of customer ${i+1}:`);
    phone=prompt(`Phone number of customer ${i+1}`);
    shopped_items=Number(prompt(`Enter the No of times the customer ${i+1} shopped`));
    let purchase_history=[];
    for(let j=0;j<shopped_items;j++)
    {
        date_of_purchase=prompt(`Enter the Date of purchase ${j+1}`);
        let items_purchased=[];
        no_of_items=Number(prompt(`Enter the Number of items in purchase number ${j+1}`));
        for(let k=0;k<no_of_items;k++)
        {
            product_name=prompt(`Enter The Name of product ${k+1}`);
            product_price=Number(prompt(`Price of product ${k+1}`));
            
            let purchase_obj={
                product_name,
                product_price
            }
            items_purchased.push(purchase_obj);
        }
        let his_obj={
            date_of_purchase,
            items_purchased
        }
        purchase_history.push(his_obj);
    }
    
    const obj={
        custName,
        email,
        phone,
        shopped_items,
        purchase_history,
        total_purchase:function()
        {
            let totSum=0;
            for(let i=0;i<this.shopped_items;i++)
            {
                let sum_per_purchase=0;
                let items= this.purchase_history[i].items_purchased;
                for(let j=0;j<items.length;j++)
                {
                    sum_per_purchase = sum_per_purchase + items[j].product_price;
                }
                totSum=totSum+sum_per_purchase;
            }
            return totSum;
        }
    }
    cusArr.push(obj);
}
prompt('Check your console');
console.log(cusArr);
//a
let details=[]
for(let i=0;i<cusArr.length;i++)
{
    const{custName,email,phone,shopped_items}=cusArr[i];
    const obj={
        custName:custName,
        email:email,
        phone:phone,
        shopped_items:shopped_items,

    };
    details.push(obj)
}
console.log(custName+"\n"+email+"\n"+phone+"\n"+shopped_items)


//b
for(let i=0;i<n;i++)
{
    if(cusArr[i].shopped_items>5)
    {
        console.log(`${cusArr[i].custName} has shopped more than 5 times`);
    }
}
//c
for(let i=0;i<n;i++)
{
    console.log(`${cusArr[i].custName}  has a bill of total Rs.${cusArr[i].total_purchase()}`)
}