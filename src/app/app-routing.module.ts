import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './customer/update/update.component'
import { ListComponent } from './customer/list/list.component'

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'customer/edit/:CGPCGP',
    component: UpdateComponent
  },
  {
    path: 'customer/add/:CGPCGP',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
