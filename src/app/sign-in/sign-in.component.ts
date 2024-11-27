import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  public email:string = ''
  public password:string =''
  constructor(public route:Router){}
  signIn(){
    const allUsers =JSON.parse(localStorage.getItem('userArray') || '[]')
    const getUser = allUsers.findIndex((user:any)=> user.email == this.email && user.password == this.password)
    if (getUser  != -1) {
      alert('user Registered')
      localStorage.setItem('currentPerson', JSON.stringify(allUsers[getUser]))
      this.route.navigate(['/dashboard'])
    }else{
      alert('Incorrect Credentials')
    }

  }
}
