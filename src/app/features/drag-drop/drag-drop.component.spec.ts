import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatCardHarness } from '@angular/material/card/testing';


import { By } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

import { DragDropComponent } from './drag-drop.component';

fdescribe('DragDropComponent', () => {
  let component: DragDropComponent;
  let fixture: ComponentFixture<DragDropComponent>;
  let de: DebugElement;
  let userService: UserService;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropComponent ],
      imports: [OverlayModule, DragDropModule, MatCardModule],
      providers: [
        { provide: UserService, useValue: jasmine.createSpyObj('UserService', ['getUser'])}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    userService = TestBed.inject(UserService);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open menu', () => {
    const button = de.query(By.css('button'));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(de.query(By.css('.box2'))).toBeTruthy();
  });

  it('should call getUser', () => {
    const button = de.query(By.css('button'));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(userService.getUser).toHaveBeenCalledWith('123');
  });

  it('should contains Something', async () => {
    const card = await loader.getHarness(MatCardHarness);
    const text = await card.getText();
    expect(text).toContain('Somethin');
  })
});
