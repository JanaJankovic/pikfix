import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() text = '';
  @Input() startIcon = '';
  @Input() endIcon = '';
  @Input() itemClass = '';
  @Input() iconClass = '';
  @Input() textClass = '';
}
