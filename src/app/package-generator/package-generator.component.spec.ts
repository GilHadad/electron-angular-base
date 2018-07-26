import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageGeneratorComponent } from './package-generator.component';

describe('PackageGeneratorComponent', () => {
  let component: PackageGeneratorComponent;
  let fixture: ComponentFixture<PackageGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
