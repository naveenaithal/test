import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<p>hello</p>
  <ul>
  <li *ngIf ="myarr;else idtemp">array is present
  </li>
  </ul>
  <ng-template #idtemp>array is empty</ng-template>
 <h2> {{name}}<h2>
  <input [(ngModel)]="name">
  <div><h1 app-root> heloooo app</h1></div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  myarr=false;
  name=[];
constructor(element:ElementRef){
  element.nativeElement.style.backgroundColor ='red';
}
}
