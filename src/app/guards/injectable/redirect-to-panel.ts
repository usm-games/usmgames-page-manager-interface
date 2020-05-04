import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Injectable()
export class RedirectToPanel {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  resolve(): void {
    if (this.authService.isAuthenticated()) this.router.navigate(['/panel']);
  }
}
