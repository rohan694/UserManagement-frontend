import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  createDate: string;
  action: string;
}
@Component({
  selector: 'app-admin-login-viewlist',
  templateUrl: './admin-login-viewlist.component.html',
  styleUrls: ['./admin-login-viewlist.component.css'],
})
export class AdminLoginViewlistComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ['id', 'name', 'email', 'createDate', 'action'];

  ELEMENT_DATA: PeriodicElement[] = [
    {
      id: 1,
      name: 'string',
      email: 'string',
      createDate: 'DE',
      action: 'string',
    },
    {
      id: 2,
      name: 'string',
      email: 'string',
      createDate: 'DE',
      action: 'string',
    },
    {
      id: 3,
      name: 'string',
      email: 'string',
      createDate: 'DE',
      action: 'string',
    },
    {
      id: 4,
      name: 'string',
      email: 'string',
      createDate: 'DE',
      action: 'string',
    },
    {
      id: 5,
      name: 'string',
      email: 'string',
      createDate: 'DE',
      action: 'string',
    },
  ];
  ngOnInit(): void {}
}
