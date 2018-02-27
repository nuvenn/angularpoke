import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { UserComponent } from './user.component';
import { DebugContext } from '@angular/core/src/view';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let debugElement: DebugElement;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations:[UserComponent]
    }).compileComponents();
  }))

  beforeEach(()=>{
    fixture =  TestBed.createComponent(UserComponent);
    component =  fixture.componentInstance;
  })
});

