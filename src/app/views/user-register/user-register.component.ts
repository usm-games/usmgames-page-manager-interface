import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;

  constructor(private users: AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      displayName: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      isAdmin: new FormControl(false)
    });
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get displayName() {
    return this.registerForm.get('displayName') as FormControl;
  }

  get isAdmin() {
    return this.registerForm.get('isAdmin') as FormControl;
  }

  register() {
    this.loading = true;
    return this.users.registerUser(this.email.value, this.displayName.value, this.isAdmin.value)
      .then(() => {
        this.email.setValue('');
        this.displayName.setValue('');
        this.isAdmin.setValue(false);
      })
      .finally(() => this.loading = false);
  }

}
