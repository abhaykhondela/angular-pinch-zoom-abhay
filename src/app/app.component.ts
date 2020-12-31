import { Component, VERSION, ViewChild } from '@angular/core';
import { PinchZoomComponent } from './pinch-zoom/pinch-zoom.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  @ViewChild('pinch') pinchZoom: PinchZoomComponent;

  move() {
    this.pinchZoom.setTransform({ x: -150, y: -10, scale: 2 });
  }
}
