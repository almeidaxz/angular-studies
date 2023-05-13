import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  @Input() age: number = 0; //usando construtor explicitamente
  @Input() data!: { email: string, role: string, name: string }; //informando ao angular que essa informação ainda será recebida
}
