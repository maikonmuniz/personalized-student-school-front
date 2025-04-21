import { Component } from '@angular/core';
import { FlexLayoutModule} from "@angular/flex-layout"
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input"; 
import { MatIconModule } from "@angular/material/icon"
import { User } from './User';

@Component({
  selector: 'app-form',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  user: User = User.create();

  save () {
    console.log(this.user);
  }
}
