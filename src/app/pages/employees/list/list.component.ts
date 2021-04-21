import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EmployeesService } from 'src/app/pages/employees/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  employees$ = this.employeesSvc.employees;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router, private employeesSvc: EmployeesService) { }

  onEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onSee(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

  async onDelete(empId: string): Promise<void> {
    try {
      await this.employeesSvc.onDeleteEmployee(empId);
      alert('Deleted!');
    } catch (err) {
      console.log(err);
    }
  }

}
