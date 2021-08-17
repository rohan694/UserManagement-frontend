import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  languages = ['EN', 'DE'];
  model = {
    userId: 1,
    name: 'string',
    userName: 'string',
    language: 'DE',
    mobileNumber: 'string',
    role: 'string',
  };
}
