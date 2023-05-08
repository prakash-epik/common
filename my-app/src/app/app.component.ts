import { Component } from '@angular/core';
import { AgeService } from './age.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  template: `
  <div>
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" [(ngModel)]="dob" (change)="calculateAge()" />
  </div>
  <div *ngIf="age">
    <p>Your age is {{ age }} years.</p>
  </div>
  <div>
      <h2>List of Products</h2>
      <ul>
        <li *ngFor="let product of products$ | async">
          {{ product.title }}
        </li>
      </ul>
    </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dob!: Date;
  age!: number;
  products$!: Observable<any>;
  constructor(private ageService: AgeService) { }

  ngOnInit(): void {
    this.products$ = this.ageService.getProducts();
  }

  calculateAge(): void {
    this.age = this.ageService.calculateAge(this.dob);
  }
  title = 'my-app';
}
