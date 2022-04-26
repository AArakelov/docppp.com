import { Injectable } from '@angular/core';
import { HttpBaseService } from './http-base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentV1 } from '../../../interfaces/document-model';

@Injectable()
export class DocumentApiService extends HttpBaseService {
  protected serviceUrl = 'lUsers';

  constructor(http: HttpClient) {
    super(http);
  }

  public getDocuments(userId: number): Observable<DocumentV1[]> {
    return this.get<DocumentV1[]>(`${userId}/getDocuments`);
  }
}
