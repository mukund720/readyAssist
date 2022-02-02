import { Injectable } from '@angular/core';
import { Router, CanLoad, Route } from '@angular/router';
@Injectable()
export class AuthService implements CanLoad {
  constructor(
    private router: Router
  ) {}
  urlList: any = [];
  canLoad(route: Route): boolean {
  
  }
}
