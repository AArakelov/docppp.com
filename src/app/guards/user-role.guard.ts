import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, map, Observable, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { authSelectors } from '../core/auth/store';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private _store: Store, private _router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._store.select(authSelectors.getUser).pipe(
      take(1),
      map((user) => {
        if (!user && !user?.emailVerified) {
          this._router.navigate(['/']);
        }
        return true;
      })
    );
  }
}
