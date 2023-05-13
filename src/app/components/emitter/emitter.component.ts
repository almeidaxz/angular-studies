import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {
  alNumber: number = 0;

  onChangeNumber(): void {
    this.alNumber = Math.floor(Math.random() * 100);
  }
}
