import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role: string;
  password: string;

  validatingForm = new FormGroup({
    role: new FormControl('role'),
    password: new FormControl('password')
    });

  constructor(public router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.role = this.validatingForm.controls.role.value;
    this.password = this.validatingForm.controls.password.value;
    this.validate();
  }

  validate() {
    // this is for sure not the best way
    // this class is very shady... you can also access the maintainer/contributor mode directly in the URL
    if (this.role === 'contributor' && this.password === 'password') {
      this.router.navigate(['contribute/contributor']);
    } else if (this.role === 'maintainer' && this.password === 'password') {
      this.router.navigate(['contribute/maintainer']);
    } else {
      alert('Role or password are incorrect');
    }
  }

}
