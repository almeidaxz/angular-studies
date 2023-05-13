import { Component } from '@angular/core';

import { MenuListService } from 'src/app/services/menu-list.service';

@Component({
  selector: 'app-renderizacao-listas',
  templateUrl: './renderizacao-listas.component.html',
  styleUrls: ['./renderizacao-listas.component.css']
})
export class RenderizacaoListasComponent {
  menuItems: string[] = ["Home", "Jobs", "About Me", "Contact Me"];

  constructor(private listService: MenuListService) { }

  removerItem(item: string): void {
    this.menuItems = this.listService.excluir(this.menuItems, item);
  }
}
