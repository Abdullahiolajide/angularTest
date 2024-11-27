import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  public firstname:string = ''
  public lastname:string = ''
  public email:string = ''
  public age:string = ''
  public password:string = ''
  public accType:string = ''
  public userArray:any[]=[];
  constructor(public route:Router){}

  ngOnInit(){
   this.userArray =  JSON.parse(localStorage.getItem('userArray') || '[]')

  }

  signUp(){

    const allUsers =JSON.parse(localStorage.getItem('userArray') || '[]')

    const checkEmail =allUsers.find((user:any)=> user.email == this.email)
    if (checkEmail) {
      alert('Email Already exists')
    }else{
      const uniqueId = Math.floor(Math.random() * 8)
      console.log(uniqueId)
      this.userArray.push({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        age:this.age,
        accType:this.accType,
        password: this.password,
        accountNumber: Math.floor( Math.random()*10000000),
        uniqueId: allUsers.length + 1
      })
      console.log(this.userArray)
      localStorage.setItem('userArray', JSON.stringify(this.userArray))
      this.route.navigate(['/signin'])
    }
  }
}
