import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  fakeData = [
    {
      name: 'Manuel',
      lastName: 'Perez',
      email: 'mp@gmail.com',
      startDate: '07/11/2018'
    },
    {
      name: 'Jose',
      lastName: 'Jimenez',
      email: 'jj@gmail.com',
      startDate: '07/11/2018'
    },
    {
      name: 'Oliver',
      lastName: 'Almeida',
      email: 'oa@gmail.com',
      startDate: '07/11/2018'
    },
    {
      name: 'Juan',
      lastName: 'Cristobal',
      email: 'jc@gmail.com',
      startDate: '07/11/2018'
    },
    {
      name: 'Hernan',
      lastName: 'Crespo',
      email: 'hc@gmail.com',
      startDate: '07/11/2018'
    },
  ];

  constructor(private router: Router) { }

  onEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onSee(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

  onDelete(item: any): void {
    alert('deleted');
  }

  ngOnInit(): void {
  }

}
