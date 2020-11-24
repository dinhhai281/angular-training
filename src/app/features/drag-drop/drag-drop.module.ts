import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragDropModule as CdkDragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';

import { DragDropRoutingModule } from './drag-drop-routing.module';
import { DragDropComponent } from './drag-drop.component';
import { SharedFeatureModule } from 'src/app/shared-feature/shared-feature.module';



@NgModule({
  declarations: [DragDropComponent],
  imports: [
    CommonModule,
    DragDropRoutingModule,
    CdkDragDropModule,
    OverlayModule,
    MatCardModule,
  ]
})
export class DragDropModule { }
