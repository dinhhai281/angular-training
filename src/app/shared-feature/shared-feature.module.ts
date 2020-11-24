import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragDropModule,
    OverlayModule,
  ],
  exports: [DragDropModule, OverlayModule],
})
export class SharedFeatureModule { }
