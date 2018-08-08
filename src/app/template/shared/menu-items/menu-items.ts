import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'consultaCertificado', type: 'link', name: 'Módulo SERECI', icon: 'contacts' },
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
