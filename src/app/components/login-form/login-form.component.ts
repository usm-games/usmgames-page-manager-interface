import { Component, OnInit } from '@angular/core';
import {ForbiddenError} from '../../errors/forbidden-error';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {AppError} from '../../errors/app-error';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  credentials = {
    username: '',
    password: ''
  };

  disabled = false;
  error = null;

  constructor(
    private auth: AuthService,
    private router: Router
    ) {}

  login(): void {
    this.error = null;
    this.disabled = true;
    this.auth.login(this.credentials.username, this.credentials.password)
      .then(() => {
        return this.router.navigate(['panel']);
      })
      .catch((err: AppError) => {
        if (err instanceof ForbiddenError) {
          this.error = 'Usuario y contraseña no coinciden';
        } else {
          this.error = 'Error desconocido';
        }
        this.disabled = false;
      });
  }

  ngOnInit(): void {}
}
