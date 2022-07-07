function ass1()
    {
        let num=parseInt(prompt('Enter the array size'));
    let myArray=[1,6,12];
    let sum=0;
    for(let i=0; i<num; i++){
       myArray[i]=parseInt(prompt('Enter the array element '+(i+1)));
    }
    for(let i=0;i<num;i++){
    
        if(myArray[i]>=0&&myArray[i]%2==0 && myArray[i]%3==0)
        {
            sum+=myArray[i];
        }
    }
    document.write('Sum of the digits is: '+sum);
 
    }

function 