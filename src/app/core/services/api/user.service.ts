import { Injectable } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../interfaces';

@Injectable()
export class UserApiService extends HttpBaseService {
  protected serviceUrl = 'lUsers';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public login(userId: string): Observable<User> {
    return this.get<User>(userId);
  }

  public singIn(
    email: string,
    password: string
  ): Observable<{ id: string; userId: number }> {
    return this.post<
      { id: string; userId: number },
      { email: string; password: string }
    >('login', {
      email,
      password,
    });
  }

  public signUp(user: User): Observable<User> {
    return this.post(null, user);
  }
}
