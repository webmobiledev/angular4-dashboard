import { Injectable } from '@angular/core';

import { IMenuItem } from './menu-item';
import { MENUITEMS } from './mock-menu-items';
import { MENU } from '../../../../settings/menu';

@Injectable()
export class MenuService {
  getMenuItems(): Promise<IMenuItem[]> {
    return Promise.resolve(MENUITEMS);
  }
}