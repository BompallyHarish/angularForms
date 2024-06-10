import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from './user';
import { Signup } from './signup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() { }
  public data: any
  title = 'tdf';
  public topics = ["Angular", "NodeJS", "MongoDB", "Express"]
  public userModel = new User("Harish", "test@gmail.com", "9502315173", "Main Road", "Gandhari", "", true, "morning")
  public signUpModel = new Signup("", "", "", "")
  @ViewChild('userForm') userForm!: NgForm;

  onSignup() {
    console.log(this.userModel)
  }
  onSubmit() {
    console.log(this.userModel)

    this.userForm.reset()
  }

}
