import { DocumentV1 } from '../../../../interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import { pageDesktopActions } from './index';

export const desktopFeatureKey = 'desktop';

export interface DesktopeState {
  isLoading: boolean;
  processing: boolean;
  documents: DocumentV1[];
}

const initialState: DesktopeState = {
  isLoading: false,
  processing: false,
  documents: [],
};

const desktopReducer = createReducer(
  initialState,
  on(pageDesktopActions.LOAD_DOCUMENTS_SUCCESS, (state, { documents }) => ({
    ...state,
    documents,
  }))
);

export function reducer(state: DesktopeState, action: Action): DesktopeState {
  return desktopReducer(state, action);
}
