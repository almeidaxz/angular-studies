import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor() { }

  excluir(items: string[], item: string) {
    return items.filter((i) => i !== item);
  }
}
