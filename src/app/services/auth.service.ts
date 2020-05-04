import {Injectable} from '@angular/core';
import {PageMangerService} from './wp-data/page-manger.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {from, Observable} from 'rxjs';
import {User} from '../models/user.model';

interface JWTAuth {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private pm: PageMangerService) {}

  public static get token(): string {
    return this.auth?.token;
  }

  private static get auth(): JWTAuth | null {
    return JSON.parse(localStorage.getItem('t'));
  }

  private static set auth(auth: JWTAuth | null) {
    localStorage.setItem('t', JSON.stringify(auth));
  }

  public async login(username: string, password: string): Promise<JWTAuth> {
    AuthService.auth = await this.pm.post<JWTAuth>('auth/login', {username, password});
    return AuthService.auth;
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
