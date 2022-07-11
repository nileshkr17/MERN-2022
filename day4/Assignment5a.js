function employee(name,email,phone,basic_salary){
    return{
        name,
        email,
        phone,
        basic_salary,

        total_sal:function(basic_salary){

            this.total_sal = basic_salary + (0.15*basic_salary) + (0.20*basic_salary);
            console.log("Total salary:-"+this.total_sal);

            if(this.total_sal>40000){
                return this.total_sal = this.total_sal - (0.10*basic_salary);
            }

            else if(this.total_sal>50000){
                return this.total_sal = this.total_sal - (0.15*basic_salary);
            }

            else if(this.total_sal>70000){
                return this.total_sal = this.total_sal - (0.20*basic_salary);
            }

            else{
                return this.total_sal = this.total_sal - (0.30*basic_salary);
            }
        }
    }
}

const e1 = employee("Nilesh","ece.20becd76@silicon.ac.in",9065616707,60000);
console.log("Name:- "+e1.name);
console.log("Email:- "+e1.email);
console.log("Phone Number:- "+e1.phone);
console.log("Salary:- "+e1.basic_salary);
console.log("Total Salary After Tax deduction:- "+e1.total_sal(50000));