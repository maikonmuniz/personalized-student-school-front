import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'college-project';
}
