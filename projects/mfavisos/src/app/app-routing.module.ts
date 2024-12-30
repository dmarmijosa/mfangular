import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from './default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    pathMatch: 'full'
  },
  {
    path:'mfavisos',
    loadChildren: () => import('./showinfo/showinfo.module').then(m => m.ShowinfoModule)
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
