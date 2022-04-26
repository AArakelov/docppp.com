import { Injectable } from '@angular/core';
import { DocumentApiService } from '../../../../core/services/api/document-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as desktopActions from './desktop.actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class DesktopEffects {
  public loadDocuments$ = createEffect(() =>
    this._actions$.pipe(
      ofType(desktopActions.LOAD_DOCUMENTS),
      switchMap((payload) => {
        return this._documentApiService
          .getDocuments(payload.userId)
          .pipe(
            map((response) =>
              desktopActions.LOAD_DOCUMENTS_SUCCESS({ documents: response })
            )
          );
      })
    )
  );

  constructor(
    private _documentApiService: DocumentApiService,
    private _actions$: Actions
  ) {}
}
