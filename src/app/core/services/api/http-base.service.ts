import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpBaseService {
  protected readonly baseUrl = 'http://new.docapp.ru:3000/api';
  protected serviceUrl = '';

  constructor(private httpClient: HttpClient) {}

  protected get<T>(url?: string, params?: HttpParams): Observable<T> {
    const additionalUrl = url ? `/${url}` : '';

    return this.httpClient.get<T>(
      `${this.baseUrl}/${this.serviceUrl}${additionalUrl}`,
      {
        params,
      }
    );
  }

  protected post<T, B = undefined>(url: string, body?: B): Observable<T> {
    const additionalUrl = url ? `/${url}` : '';

    return this.httpClient.post<T>(
      `${this.baseUrl}/${this.serviceUrl}${additionalUrl}`,
      body
    );
  }

  protected patch<T, B>(url?: string, body?: B): Observable<T> {
    const additionalUrl = url ? `/${url}` : '';

    return this.httpClient.patch<T>(
      `${this.baseUrl}/${this.serviceUrl}${additionalUrl}`,
      body
    );
  }

  protected put<T, B>(url?: string, body?: B): Observable<T> {
    const additionalUrl = url ? `/${url}` : '';

    return this.httpClient.put<T>(
      `${this.baseUrl}/${this.serviceUrl}${additionalUrl}`,
      body
    );
  }

  protected delete<T, B>(url?: string, body?: B): Observable<T> {
    const additionalUrl = url ? `/${url}` : '';

    return this.httpClient.delete<T>(
      `${this.baseUrl}/${this.serviceUrl}${additionalUrl}`,
      body
    );
  }
}
