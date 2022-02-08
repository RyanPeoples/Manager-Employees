const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, title, salary, boss, assigned){
        super(name, title, salary, boss)
        this.assigned = assigned;
    }
}
