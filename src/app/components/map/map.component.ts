import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() overlay: boolean = false;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private map: L.Map;

  ngOnInit() {
    this.map = L.map('map', {
      center: [46.55472, 15.6467],
      zoom: 14,
      renderer: L.canvas(),
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(this.map);

    if (this.overlay) this.map.zoomControl.remove();
    setTimeout(() => {
      this.map.invalidateSize();
    }, 1000);
  }
}
