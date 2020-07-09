import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PichomeComponent} from '../app/pichome/pichome.component';
import {PiclistComponent} from '../app/piclist/piclist.component';
const routes: Routes = [
  {
    path: "fetch",
    component: PiclistComponent
  },
  {
    path: "",
    redirectTo: "/fetch",
    pathMatch: "full"
  },
  {
    path: "pic",
    component: PichomeComponent
  },
  { path:'**' ,
  redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
