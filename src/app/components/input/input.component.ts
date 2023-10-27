import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() inputType = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() startIcons = [];
  @Input() endIcons = [];
  @Input() wrapperClass = '';
  @Input() inputClass = '';
}
