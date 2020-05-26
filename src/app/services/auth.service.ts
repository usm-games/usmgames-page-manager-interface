import {Injectable} from '@angular/core';
import {PageMangerService} from './wp-data/page-manger.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {from, Observable} from 'rxjs';
import {User} from '../models/user.model';
import {ToastService} from './toast.service';
import {AppError} from '../errors/app-error';
import {InvalidError} from '../errors/invalid-error';

interface JWTAuth {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private pm: PageMangerService,
    private toasts: ToastService
  ) {}

  public static get token(): string {
    return this.auth?.token;
  }

  private static get auth(): JWTAuth | null {
    return JSON.parse(localStorage.getItem('t'));
  }

  private static set auth(auth: JWTAuth | null) {
    localStorage.setItem('t', JSON.stringify(auth));
  }

  public login(username: string, password: string): Promise<JWTAuth> {
    return this.pm.post<JWTAuth>('auth/login', {username, password})
      .then(auth => {
        AuthService.auth = auth;
        return AuthService.auth;
      })
      .catch((err: AppError) => {
        this.toasts.showError('Credenciales inválidas');
        throw err;
      });
  }

  public registerUser(email: string, displayName: string, isAdmin: boolean = false): Promise<User> {
    return this.pm.post<User>('users', {
      email, display_name: displayName, admin: isAdmin
    })
      .then((user: User) => {
        this.toasts.showSuccess(`El usuario ${user.username} ha sido registrado`);
        return user;
      })
      .catch((err: AppError) => {
      if (err instanceof InvalidError) {
        if (err.error.error.code === 'EMAIL_IN_USE') {
          this.toasts.showError('Este correo ya está registrado');
        } else {
          this.toasts.showError('Unknown error');
        }
      } else {
        this.toasts.showError('Unknown error');
      }
      throw err;
    });
  }

  public me(): Observable<User> {
    return this.pm.get<User>('auth/me');
  }

  public logout() {
    AuthService.auth = null;
  }

  public isAuthenticated(): boolean {
    if (AuthService.auth) {
      const jwtHelper = new JwtHelperService();
      if (jwtHelper.isTokenExpired(AuthService.auth.token)) this.logout();
    }
    return !!AuthService.auth;
  }
}
