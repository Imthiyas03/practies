import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetallComponent } from './getall/getall.component';
import { PostComponent } from './post/post.component';
import { ForObservableComponent } from './for-observable/for-observable.component';

const routes: Routes = [
  {path:'user',component:PostComponent},
  {path:'getuser',component:GetallComponent},
  {path:'obsewrvabel',component:ForObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
