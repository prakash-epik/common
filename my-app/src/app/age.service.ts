import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  constructor(private http: HttpClient) { }

  calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  getUsers(): Observable<any> {
    // mock user API
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url).pipe(
      catchError(error => of(error))
    );
  }

  getProducts(): Observable<any> {
    // mock e-commerce API
    const url = 'https://fakestoreapi.com/products';
    return this.http.get(url).pipe(
      catchError(error => of(error))
    );
  } 
}
