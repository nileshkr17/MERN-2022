var x=Number(prompt('Enter the no. of customer : '));
        let customers = [];
        for(i=0;i<x;i++)
        {
            let customers = {
            name: prompt("Enter the name of customer:"),
            email: prompt("Enter the email of customer:"),
            phone: Number(prompt("Enter the phone of customer:")),
            no_of_times_shopped: Number(prompt(
            "Enter the number of times customer shopped:"
            )),
            purchase_history: [],
            }
            for(j=0;j<customers.no_of_times_shopped;j++)
            {
                let purchase_history={
                    purchase_date:prompt('Enter the date of purchase: '),
                    no_of_item_purchased: Number(prompt("Enter the no of item purchased:")),
                    item_details:[],
                }
                for(k=0;k<purchase_history.no_of_item_purchased;k++)
                {
                    let item_details={
                        item_name:prompt("Enter product name:"),
                        item_price: Number(prompt('Enter the price of product:')),
                    }
                }
            }
        
        }
        console.log(customers.length);

        let more_than_5 = customers.filter((customer)=>customer.no_of_times_shopped>5)
        {
            console.log(customers.name);
        }

        let s = 0;
        console.log(`customers names and their total bill `);
        for (let i = 0; i < x; i++) {
        console.log(customers[i].name);
        for (let j = 0; j < customers[i].no_of_times_shopped; j++) {
            for (let k = 0; k < customers[i].purchase_history[j].item_details.length; k++) {
                s = s + customers[i].purchase_history[j].item_details[k].item_price;
            }

        }
        console.log(`total purchase price=${s}`);
        s = 0;
        }
