const user={
    name:'John Doe',
    email:'jo@email.com',
    phone:'90651616707',
    password:'123'
}

const{name:fullName,email:userEmail,phone:userPhone}=user;

console.log('UserDetails-
            Name:${fullName},
            phone:${userPhone},
            email:${userEmail}
            ')