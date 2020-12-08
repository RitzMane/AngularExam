import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PtabComponent } from './product/ptab.component';
import { PlistComponent } from './product/plist.component';

const routes: Routes = [{path:"ptab",component:PtabComponent},
               {path:"plist",component:PlistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
