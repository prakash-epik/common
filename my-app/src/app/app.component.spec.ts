
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AgeService } from './age.service';

describe('AppComponent', () => {
  let service: AgeService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [AgeService] // Add AgeService to providers array
    });
    service = TestBed.inject(AgeService); // Initialize service variable
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should calculate age correctly', () => {
    const dateOfBirth = new Date(1990, 0, 1);
    const age = service.calculateAge(dateOfBirth);
    expect(age).toBe(33);
  });
  
});
