
document.getElementsByTagName('form')[0].addEventListener('submit',(event)=>{
    let valid=1;
    let msg="";
    const full_name=document.getElementById('uname').value;
    if(full_name==''&& valid==1){
        msg='*Enter the full name*\n';
        valid=0;
    }
    console.log('Full name:',full_name)

    const email=document.getElementById('uemail').value;
    console.log('Email Id:',email)
    if(email=='' && valid==1){
        msg='*Enter the email id*\n';
        valid=0;
    }
    const age=document.getElementById('uage').value;
    if(age=='' && valid==1){
        msg='*Enter the Age\*n';
        valid=0;
    }
    const phone=document.getElementById('uphone').value;
    if(phone=='' && valid==1){
        msg='*Enter the phone number\*n';
        valid=0;
    }
    console.log('Phone no',phone);

    const password=document.getElementById('upass').value;   
    if(password=='' && password.length<6 && valid==1){
        msg='*Enter the password of atleast 6 characters*\n';
        valid=0;
    }
    console.log('Password:',password) 
    const genders = document.getElementsByName('rate');
    let values;
   for(var i = 0; i < genders.length; i++){
    if(genders[i].checked){
        values = genders[i].value;
    }
   }
    console.log('Gender:',values);
    const address= document.querySelector('#uadd').value;
    if(address==''&&valid==1){
        msg='*Enter the Address*\n';
        valid=0;
    }
    console.log('Address:',address);
    
    
    const agree= document.querySelector('#checkbox').checked ? document.querySelector('#checkbox').value:'';
    if(agree=='' && valid==1){
        msg='check the agreement';
        valid=0;
    }
    console.log(agree);
    if(valid==0)
    {
        document.querySelector(".error_msg").style.display='block';
        document.querySelector(".error_msg").innerText=msg;
       
    }
    event.preventDefault();
   
});