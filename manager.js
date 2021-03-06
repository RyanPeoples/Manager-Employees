const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, salary, title, manager){
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
        return employee;
    }
    //change bonus function for manager
    bonus(multiplier) {
        return (this.salary + this.totalSubsalary()) * multiplier;
    }
}

