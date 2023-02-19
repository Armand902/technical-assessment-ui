import { ComponentFixture, TestBed, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/view/dashboard.component";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { initialState } from "./dashboard/store/dashboard.state";

describe("AppComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the title 'angular-coding-interview'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("angular-coding-interview");
  });
});

describe("Dashboard Component", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    let store: MockStore;

    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [provideMockStore({ initialState })],
    });

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Add more valuable tests to test component, store selector, reducers

  it(`should have the label with words "Total VM Running:"`, () => {
    let labelName = fixture.debugElement.query(By.css("")); //TODO Add test
    expect(labelName.nativeElement.textContent).toBe("Total VM Running:");
  });
});
