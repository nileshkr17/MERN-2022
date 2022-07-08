/*---Assignment 1----*/
function ass1()
    {
        let num=parseInt(prompt('Enter the array size'));
    let myArray=[];
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
/*---Assignment 2----*/
function ass2()
{
    let num=parseFloat(prompt('Enter the array size'));
let myArray=[];
let sum=0.0;
let flag=0;
for(let i=0; i<num; i++){
         myArray[i]=parseFloat(prompt('Enter the array element '+(i+1)));
     }
for(let i=0;i<num;i++){

        if(myArray[i]<0.0)
         {
          sum+=myArray[i];
           flag++;
         }
     }  
let avg=sum/flag;
document.write('Avg of the digits is: '+avg);

}

/*---Assignment 3----*/
function isPrime(n)
{
    let flag=0;
    for(let i=2;i<=n/2;i++)
    {
        if(n%i==0)
        {
            flag++;
        }
    }
    if(flag==0)
    {
        return 1;
    }
    else return 0;
    
}
function ass3()
{
    let length=10;
    let i=0,n=1;
    let s=0;
    while(1)
    {
     n++;
     if(isPrime(n))
     {
        s=s+n;
        i++;
     }
     if(i==length)
     {
        break;
     }
    }
    document.write('Sum of the First 10 Prime numbers is : '+s);
}

/*---Assignment 4----*/
function ass4()
{
    let num=parseInt(prompt('Enter the array size'));
    let myArray=[];
    for(let i=0; i<num; i++){
       myArray[i]=parseInt(prompt('Enter the array element '+(i+1)));
    }
    let l=0;
    for(let i=0; i<num; i++){
        if(myArray[i]>l){
            l=myArray[i];
        }
    }
    document.write('Largest numbers is : '+l);
}