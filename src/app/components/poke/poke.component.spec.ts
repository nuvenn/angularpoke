import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { PokeComponent } from './poke.component';
import { DebugContext } from '@angular/core/src/view';

describe('UserComponent', () => {
  let component: PokeComponent;
  let fixture: ComponentFixture<PokeComponent>;
  let debugElement: DebugElement;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations:[PokeComponent]
    }).compileComponents();
  }))

  beforeEach(()=>{
    fixture =  TestBed.createComponent(PokeComponent);
    component =  fixture.componentInstance;
  })
});

