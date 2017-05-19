import {UserListComponent} from './user-list/user-list.component';
import {TestBed, async} from '@angular/core/testing';

describe('user component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserListComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render hello world', () => {
    const fixture = TestBed.createComponent(UserListComponent);
    fixture.detectChanges();
    const hello = fixture.nativeElement;
    expect(hello.querySelector('h1').textContent).toBe('Hello World!');
  });
});
