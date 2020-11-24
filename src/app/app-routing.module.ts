import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'drag-drop',
    loadChildren: () => import('./features/drag-drop').then(m => m.DragDropModule),
  },
  {
    path: 'list',
    loadChildren: () => import('./features/list').then(m => m.ListModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
