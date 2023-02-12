import { DashboardComponent } from "./dashboard/view/dashboard.component";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { TestBed } from "@angular/core/testing";

describe("Auth Guard", () => {
  let store: MockStore;
  const initialState = { loggedIn: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideMockStore({ initialState })],
    });

    store = TestBed.inject(MockStore);

    let component = new DashboardComponent(store);

    it("It should return results", () => {
      var test = component.calculateRam(1000000);

      expect(test).toEqual(1);
    });
  });
});

// describe("Sample test suite", () => {
//   test("Initial test", () => {
//     expect(2).toEqual(3);
//   });
//   test("hello world output", () => {
//     let store: MockStore;

//     let s = new DashboardComponent(store);
//     expect(s.hello("Ivan")).toEqual("Hello Ivan");
//   });
// });

// describe("List virtual machines", () => {
//   it("It should return results", () => {
//     expect(true).toBeTruthy();
//   });
// });
