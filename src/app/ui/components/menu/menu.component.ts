import { Component, OnInit } from '@angular/core';

import { IMenuItem } from './menu-item';
import { MenuService } from './menu.service';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuService],
  host: {
    'class': 'app-menu'
  }
})
export class MenuComponent implements OnInit {
  menuItems: IMenuItem[];

  constructor( private menuService: MenuService ) { }

  getMenuItems(): void {
    this.menuService.getMenuItems().then(menuItems => this.menuItems = menuItems);
  }

  getLiClasses(item: any, isActive: any) {
    return {
      'has-sub': item.sub,
      'active': item.active || isActive,
      'menu-item-group': item.groupTitle,
      'disabled': item.disabled
    };
  }
  getStyles(item: any) {
    return {
      'background': item.bg,
      'color': item.color
    };
  }

  ngOnInit(): void {
    this.getMenuItems();
  }

  toggle(event: Event, item: any, el: any) {
    event.preventDefault();

    let items: any[] = el.menuItems;

    if (item.active) {
      item.active = false;
    } else {
      for (let i = 0; i < items.length; i++) {
        items[i].active = false;
      }
      item.active = true;
    }
  }
}
