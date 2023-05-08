import { Component } from '@angular/core';
import { AgeService } from './age.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
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
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dob!: Date;
  age!: number;
  constructor(private ageService: AgeService) { }

  calculateAge(): void {
    this.age = this.ageService.calculateAge(this.dob);
  }
  title = 'my-app';
}
