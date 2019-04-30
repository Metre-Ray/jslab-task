import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemListComponent } from './components/item-list/item-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'item-list', pathMatch: 'full' },
  { path: 'item-list', component: ItemListComponent },
  { path: 'item-details/:id', component: ItemDetailsComponent },
  { path: '**', redirectTo: 'item-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
