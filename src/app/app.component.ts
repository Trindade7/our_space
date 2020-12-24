import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'our-space';

  hello(): void {
    console.log('eh');

    // TODO: create function
  }
}
