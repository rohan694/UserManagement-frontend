import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalServicesService } from '../global-services.service';
import { FormBuilder } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  constructor(
    private service: GlobalServicesService,
    private fb: FormBuilder
  ) {}
  myForm = new FormGroup({
    name: new FormControl('Sammy'),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  ngOnInit() {}
  languages = ['EN', 'DE'];

  model = new User();

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

  registerUser() {
    if (this.model.confirmPassword == this.model.password) {
      this.service.registerUser(this.model).subscribe((data: any) => {
        console.log(data);
      });
    } else {
      alert("password and confirm password didn't match");
    }
  }
}
