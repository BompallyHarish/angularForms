import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tdf';
  public topics = ["Angular", "NodeJS", "MongoDB", "Express"]
public userModel = new User("Harish","test@gmail.com","9502315173","Main Road", "Gandhari","Angular",true,"morning")
}
