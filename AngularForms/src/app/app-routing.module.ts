import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { MylistComponent } from './mylist/mylist.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  { path: 'appcomponent', component:AppComponent }, 
  { path: '', component:FrontpageComponent },
  { path: 'mylist', component:MylistComponent },
  { path: 'features', component:FeaturesComponent },
  { path: 'frontpage', component:FrontpageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
