import { Component, OnInit } from "@angular/core";

@Component({

    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit{
    
    constructor(){ }
    
    ngOnInit(): void {
        
    }

    employees: any[] = [];

  addEmployee() {
    const newEmployee = {
      id: this.generateUniqueId(),
      name: 'New Employee',
      salary: '1000'
    };
    this.employees.push(newEmployee);
  }

  removeEmployee(employee: any) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }

    
  }


  private generateUniqueId(): number {
    // Implement your unique ID generation logic here
    return Math.floor(Math.random() * 1000);
  }


 qty= 3;
 price = 2.5;


    
}