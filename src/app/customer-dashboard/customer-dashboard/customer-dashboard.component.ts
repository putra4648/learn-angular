import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {

  submitData(myForm: NgForm) {
    console.log(myForm.value)
    const { name, birthday } = myForm.value;
    const message: string[] = [];
    if (!name) {
      message.push("Name can't be empty")
    }

    if (!birthday) {
      message.push("Birthday date can't be empty")
    }

    if (message.length == 0) {
      const now = moment()
      const age = now.diff(birthday, 'years');

      if (age == 0) {
        alert(`Your name ${name} \nSorry can't enter`)
      } else if (age > 18) {
        alert(`Your name ${name} \nYou can continue`)
      } else {
        alert(`Your name ${name} \nYour age is ${age}`)
      }
    } else {
      alert(message.join("\n"))
    }
  }
}
