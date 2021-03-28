import {Component} from '@angular/core';
import {ShowsComponent} from './shows/shows.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zoom';

  constructor(public  showsComponent: ShowsComponent) {
  }
}
