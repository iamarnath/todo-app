import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTodoListComponent } from './all-todo-list.component';

describe('AllTodoListComponent', () => {
  let component: AllTodoListComponent;
  let fixture: ComponentFixture<AllTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
