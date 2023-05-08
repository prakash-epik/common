import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AgeService } from './age.service';

describe('AgeService', () => {
  let service: AgeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule], // add HttpClientModule here
      providers: [AgeService, HttpClient] // add HttpClient here
    });
    service = TestBed.inject(AgeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should calculate age correctly', () => {
    const dateOfBirth = new Date(1990, 0, 1);
    const age = service.calculateAge(dateOfBirth);
    expect(age).toBe(33);
  });

  it('should return an Observable of products', () => {
    const mockProducts = [
      { id: 1, title: 'Product 1', price: 10.99 },
      { id: 2, title: 'Product 2', price: 20.99 }
    ];
    service.getProducts().subscribe((products: any) => {
      expect(products).toEqual(mockProducts);
    });
    const req = httpMock.expectOne('https://fakestoreapi.com/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should return an Observable of users', () => {
    const mockUsers = [
      { id: 1, name: 'User 1', email: 'user1@example.com' },
      { id: 2, name: 'User 2', email: 'user2@example.com' }
    ];
    service.getUsers().subscribe((users: any) => {
      expect(users).toEqual(mockUsers);
    });
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});





// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';
// import { AgeService } from './age.service';

// describe('AppComponent', () => {
//   let service: AgeService;
  
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule],
//       declarations: [AppComponent],
//       providers: [AgeService] // Add AgeService to providers array
//     });
//     service = TestBed.inject(AgeService); // Initialize service variable
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'my-app'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('my-app');
//   });

//   it('should calculate age correctly', () => {
//     const dateOfBirth = new Date(1990, 0, 1);
//     const age = service.calculateAge(dateOfBirth);
//     expect(age).toBe(33);
//   });
  




// });
