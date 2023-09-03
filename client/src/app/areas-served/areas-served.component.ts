import { Component } from '@angular/core';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { markers } from './marker-list';
import { Marker } from './marker.model';

@Component({
  selector: 'app-areas-served',
  templateUrl: 'areas-served.component.html',
  styleUrls: ['areas-served.component.css']
})
export class AreasServedComponent {
  lat = 5.3542;
  lng = 100.3008;
  map: GoogleMap;
  markers: Marker[] = markers;

  public getMapInstance(map: GoogleMap) {
    this.map = map;
  }

  public resetMap() {
    this.map.setCenter({ lat: 5.3542, lng: 100.3008 });
    console.log('resetMap Method executed');
  }
}
