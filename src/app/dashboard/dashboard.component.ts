import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public rAccountNumber = ''
  public amount =''
  public AccountName = ''
  public pin = ''
  public userDetails:any = '';
  public accountBalance:number = 2500;
  public allUsers:any[]=[];
  public userIndex:number = 0;
  constructor(public route:Router){}


  ngOnInit(){
    const userDetails = JSON.parse(localStorage.getItem('currentPerson') || '[]')
    this.allUsers = JSON.parse(localStorage.getItem('userArray') || '[]')
    this.userIndex = this.allUsers.findIndex((user:any)=> user.email == userDetails.email)
   this.userDetails = {...userDetails}
   console.log(this.userDetails)


  }
  createPin(){
    const userPin = prompt('Enter 4 Your Pin')
    this.allUsers[this.userIndex].pin = userPin
    console.log(this.allUsers[this.userIndex])
    localStorage.setItem('userArray', JSON.stringify(this.allUsers))
    localStorage.setItem('currentPerson', JSON.stringify(this.allUsers[this.userIndex]))

  }
  transfer(){
    
    if (this.pin == this.userDetails.pin) {
    if (parseInt(this.amount) <= this.accountBalance) {
      this.accountBalance = this.accountBalance - parseInt(this.amount)
    }else{
      alert("Insufficient Balance")
    }
    }
    else{
      alert("Wrong PIN")
    }


  }

  addMoney(){
    const amount = prompt("amount")
    if (amount) {
      const newBal = this.accountBalance - parseInt(amount)
      this.accountBalance = newBal
    }else{

    }


  }


}
