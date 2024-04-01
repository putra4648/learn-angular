import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-directive',
  templateUrl: './customer-directive.component.html',
  styleUrl: './customer-directive.component.scss'
})
export class CustomerDirectiveComponent {
  isRandom: boolean = false;
  containerRandomStyle: Record<string, string> = {};

  clickRandom() {
    this.isRandom = !this.isRandom;
  }

  clickRandomStyle() {
    this.containerRandomStyle = {
      'background-color': this.isRandom ? 'red' : 'blue'
    }
    this.clickRandom()
  }

  clickIf() {
    this.clickRandom()
  }
}
