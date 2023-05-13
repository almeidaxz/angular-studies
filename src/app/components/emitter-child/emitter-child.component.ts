import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emitter-child',
  templateUrl: './emitter-child.component.html',
  styleUrls: ['./emitter-child.component.css']
})
export class EmitterChildComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(): void {
    this.changeNumber.emit();
  }
}
