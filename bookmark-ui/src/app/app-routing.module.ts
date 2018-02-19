import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {SearchpocComponent} from './searchpoc/searchpoc.component'
import {AtsearchComponent} from './atsearch/atsearch.component'

const routes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full'},
   { path: 'home', component: HomeComponent},
  //{ path: 'home', component: SearchpocComponent},
  { path: 'searchpoc', component: SearchpocComponent},
  {path: 'atsearch', component: AtsearchComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
