import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-component',
  templateUrl: './diretivas-component.component.html',
  styleUrls: ['./diretivas-component.component.css']
})
export class DiretivasComponentComponent {
  stColor: string = "yellow";
  lsClasses: string[] = ["important-title", "big-title"];
  unClass: string = "under";
}
