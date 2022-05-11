import { Injectable } from '@angular/core';
import { IMenuItem } from '../../../../../interfaces';
import { appRoutesNames } from '../../../../../app-routes.names';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SideNavigationService {
  readonly menuItem: IMenuItem[] = [
    {
      name: 'My profile',
      icon: 'profile',
      state: 'profile',
      type: 'link',
    },
    {
      name: 'Monitoring',
      icon: 'documents',
      state: 'monitoring',
      type: 'link',
    },
    {
      name: 'Documents',
      icon: 'documents',
      state: 'documents',
      type: 'link',
      sub: [
        {
          name: 'Researches',
          icon: 'research',
          state: `documents/${appRoutesNames.DASHBOARD.DOCUMENT.RESEARCH}`,
          type: 'link',
          id: 1,
        },
        {
          name: 'Analyzes',
          icon: 'analyse',
          state: `documents/${appRoutesNames.DASHBOARD.DOCUMENT.ANALIZES}`,
          type: 'link',
          id: 2,
        },
        {
          name: 'Consultations',
          icon: 'appointment',
          state: `documents/${appRoutesNames.DASHBOARD.DOCUMENT.CONSULTATIONS}`,
          type: 'link',
          id: 3,
        },
        {
          name: 'Notes',
          icon: 'transcript',
          state: `documents/${appRoutesNames.DASHBOARD.DOCUMENT}`,
          type: 'link',
          id: 4,
        },
      ],
    },
  ];

  menuItems$$ = new BehaviorSubject<IMenuItem[]>(this.menuItem);
  menuItem$ = this.menuItems$$.asObservable();
  constructor() {}
}
